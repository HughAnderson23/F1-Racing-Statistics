const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            drivers: [],
            circuits: [],
            qualifyingResults: [],
            raceResults: [] // Add raceResults array to store race results
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
            }
        }
    };
};

export default getState;
