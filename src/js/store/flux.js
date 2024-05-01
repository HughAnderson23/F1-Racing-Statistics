const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            drivers: [],
            circuits: [],
            qualifyingResults: [],
            raceResults: [],
            raceSchedule: [], // Add raceSchedule array to store race schedule
            topF1News: [] // Add topF1News array to store top Formula 1 news articles
        },
        actions: {
            fetchDrivers: async (year) => {
                try {
                    const resp = await fetch(`https://ergast.com/api/f1/${year}/drivers.json`);
                    if (!resp.ok) {
                        throw new Error('Failed to fetch drivers data');
                    }
                    const data = await resp.json();
                    const drivers = data.MRData.DriverTable.Drivers;
                    setStore({ drivers });
                } catch (error) {
                    console.error('Error fetching drivers:', error);
                }
            },

            fetchCircuits: async (year) => {
                try {
                    const resp = await fetch(`https://ergast.com/api/f1/${year}.json`);
                    if (!resp.ok) {
                        throw new Error('Failed to fetch race schedule data');
                    }
                    const data = await resp.json();
                    const races = data.MRData.RaceTable.Races;

                    const roundNumbers = races.map(race => ({
                        round: race.round,
                        raceName: race.raceName
                    }));

                    const circuitsPromises = roundNumbers.map(async roundInfo => {
                        const resp = await fetch(`https://ergast.com/api/f1/${year}/${roundInfo.round}/circuits.json`);
                        if (!resp.ok) {
                            throw new Error(`Failed to fetch circuits data for round ${roundInfo.round}`);
                        }
                        const data = await resp.json();
                        return {
                            round: roundInfo.round,
                            circuits: data.MRData.CircuitTable.Circuits
                        };
                    });

                    const circuitsByRound = await Promise.all(circuitsPromises);

                    setStore({ circuitsByRound });
                } catch (error) {
                    console.error('Error fetching circuits:', error);
                }
            },

            fetchQualifyingResults: async (year, round) => {
                try {
                    const resp = await fetch(`https://ergast.com/api/f1/${year}/${round}/qualifying.json`);
                    if (!resp.ok) {
                        throw new Error('Failed to fetch qualifying results data');
                    }
                    const data = await resp.json();
                    const qualifyingResults = data.MRData.RaceTable.Races[0].QualifyingResults;
                    setStore({ qualifyingResults });
                    // actions.setSelectedRound(round); 
                } catch (error) {
                    console.error('Error fetching qualifying results:', error);
                }
            },

            fetchRaceResults: async (year, round) => {
                try {
                    const resp = await fetch(`https://ergast.com/api/f1/${year}/${round}/results.json`);
                    if (!resp.ok) {
                        throw new Error('Failed to fetch race results data');
                    }
                    const data = await resp.json();
                    const raceResults = data.MRData.RaceTable.Races[0].Results;
                    setStore({ raceResults });
                } catch (error) {
                    console.error('Error fetching race results:', error);
                }
            },

            fetchRaceSchedule: async () => {
                try {
                    const resp = await fetch('https://ergast.com/api/f1/current.json');
                    if (!resp.ok) {
                        throw new Error('Failed to fetch race schedule data for the current season');
                    }
                    const data = await resp.json();
                    const races = data.MRData.RaceTable.Races;
                    setStore({ raceSchedule: races });
                } catch (error) {
                    console.error('Error fetching race schedule:', error);
                }
            },
            // Inside the actions object
            setSelectedRound: (round) => {
                setStore({ selectedRound: round });
            },

            // Add a new action function to fetch the top Formula 1 news articles
            fetchTopF1News: async () => {
                try {
                    const response = await fetch(`https://newsapi.org/v2/top-headlines?q=Formula%201&language=en&sortBy=popularity&apiKey=463ed0543a65400eaa4c7c1405c1357a`);

                    const data = await response.json();

                    if (response.ok && data.articles) {
                        const topArticles = data.articles.slice(0, 6);
                        setStore({ topF1News: topArticles });
                    } else {
                        throw new Error('Failed to fetch top Formula 1 news articles');
                    }
                } catch (error) {
                    console.error('Error fetching top Formula 1 news articles:', error);
                }
            }

        }
    };
};

export default getState;


