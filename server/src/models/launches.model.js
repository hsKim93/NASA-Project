const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function existsLuanchWithId(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(newLaunch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(newLaunch, {
        flightNumber: latestFlightNumber,
        customers: ['NASA', 'ZTM'],
        upcoming: true,
        success: true,
    }));
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existsLuanchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById,
}