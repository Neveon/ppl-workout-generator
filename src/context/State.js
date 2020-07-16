import React, { useReducer } from "react";
import Context from './Context';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  push: {
    shoulders: {
      compound: [],
      isolate: [],
    },
    chest: {
      compound: [],
      isolate: [],
    },
    triceps: {
      compound: [],
      isolate: [],
    },
  },
  pull: {
    shoulders: {
      compound: [],
      isolate: [],
    },
    back: {
      compound: [],
      isolate: [],
    },
    biceps: {
      compound: [],
      isolate: [],
    },
  },
  legs: {
    quads: {
      compound: [],
      isolate: [],
    },
    hamstring: {
      compound: [],
      isolate: [],
    },
  }
};

// Randomly select 'num' amount of exercises
const randomSelect = (exercises, num) => {

    let newarr = [];

    while(num > 0) {

        let workout = exercises[Math.floor(Math.random() * exercises.length)];

        // Only add unique workouts, no repeats
        if(!newarr.includes(workout)) {
            newarr.push(workout);
            num--;
        }
    }

    return newarr;
};


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const genPushWorkouts = async (more) => {
        if(more) {
            try {
                const res = await fetch('http://localhost:3001/push');
                const data = await res.json();
                
                // Randomly select more workouts
                const pushWorkouts = {
                        chest: {
                            compound: randomSelect(data.chest.compound, 2),
                            isolate: randomSelect(data.chest.isolate, 3)
                        },
                        shoulders: {
                            compound: randomSelect(data.shoulders.compound, 2),
                            isolate: randomSelect(data.shoulders.isolate, 3)
                        },
                        triceps: {
                            compound: randomSelect(data.triceps.compound, 2),
                            isolate: randomSelect(data.triceps.isolate, 3)
                        }
                    };

                dispatch({
                    type: 'GENERATE_MORE_PUSH',
                    payload: pushWorkouts
                });
            } catch(err) {
                console.error(err);
            }

        } else {
            // generate 1 compound workouts per body part (random)
            // generate 2 isolate workouts per body part (random)
            try {
                const res = await fetch('http://localhost:3001/push');
                const data = await res.json();
                
                // Randomly select workouts from the data
                const pushWorkouts = {
                    chest: {
                        compound: randomSelect(data.chest.compound, 1),
                        isolate: randomSelect(data.chest.isolate, 2)
                    },
                    shoulders: {
                        compound: randomSelect(data.shoulders.compound, 1),
                        isolate: randomSelect(data.shoulders.isolate, 2)
                    },
                    triceps: {
                        compound: randomSelect(data.triceps.compound, 1),
                        isolate: randomSelect(data.triceps.isolate, 2)
                    }
                };

                dispatch({
                    type: 'GENERATE_PUSH',
                    payload: pushWorkouts
                });
            } catch (err) {
                console.error(err);
            }
        }
    };

    // Pull
    const genPullWorkouts = async (more) => {
        console.log(more);
        if(more) {
            try {
                const res = await fetch('http://localhost:3001/pull');
                const data = await res.json();
                
                // Randomly select more workouts
                const pullWorkouts = {
                        back: {
                            compound: randomSelect(data.back.compound, 2),
                            isolate: randomSelect(data.back.isolate, 3)
                        },
                        shoulders: {
                            compound: randomSelect(data.shoulders.compound, 2),
                            isolate: randomSelect(data.shoulders.isolate, 3)
                        },
                        biceps: {
                            compound: randomSelect(data.biceps.compound, 2),
                            isolate: randomSelect(data.biceps.isolate, 3)
                        }
                    };

                dispatch({
                    type: 'GENERATE_MORE_PULL',
                    payload: pullWorkouts
                });
            } catch(err) {
                console.error(err);
            }

        } else {
            try {
                const res = await fetch('http://localhost:3001/pull');
                const data = await res.json();
                
                // Randomly select workouts from the data
                const pullWorkouts = {
                    back: {
                        compound: randomSelect(data.back.compound, 1),
                        isolate: randomSelect(data.back.isolate, 2)
                    },
                    shoulders: {
                        compound: randomSelect(data.shoulders.compound, 1),
                        isolate: randomSelect(data.shoulders.isolate, 2)
                    },
                    biceps: {
                        compound: randomSelect(data.biceps.compound, 1),
                        isolate: randomSelect(data.biceps.isolate, 2)
                    }
                };

                dispatch({
                    type: 'GENERATE_PULL',
                    payload: pullWorkouts
                });
            } catch (err) {
                console.error(err);
            }
        }
    };
    
// Legs
    const genLegWorkouts = async (more) => {
        console.log(more);
        if(more) {
            try {
                const res = await fetch('http://localhost:3001/legs');
                const data = await res.json();
                
                // Randomly select more workouts
                const legWorkouts = {
                        quads: {
                            compound: randomSelect(data.quads.compound, 2),
                            isolate: randomSelect(data.quads.isolate, 3)
                        },
                        hamstring: {
                            compound: randomSelect(data.hamstring.compound, 2),
                            isolate: randomSelect(data.hamstring.isolate, 3)
                        }
                    };

                dispatch({
                    type: 'GENERATE_MORE_LEGS',
                    payload: legWorkouts
                });
            } catch(err) {
                console.error(err);
            }

        } else {
            try {
                const res = await fetch('http://localhost:3001/legs');
                const data = await res.json();
                
                // Randomly select workouts from the data
                const legWorkouts = {
                    quads: {
                        compound: randomSelect(data.quads.compound, 1),
                        isolate: randomSelect(data.quads.isolate, 2)
                    },
                    hamstring: {
                        compound: randomSelect(data.hamstring.compound, 1),
                        isolate: randomSelect(data.hamstring.isolate, 2)
                    }
                };

                dispatch({
                    type: 'GENERATE_LEGS',
                    payload: legWorkouts
                });
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (<Context.Provider value={{
        push: state.push,
        pull: state.pull,
        legs: state.legs,
        genPushWorkouts: genPushWorkouts,
        genPullWorkouts: genPullWorkouts,
        genLegWorkouts: genLegWorkouts
    }}>
        {children}
    </Context.Provider>
    );
}