class trainFrequency {

    constructor() {
        this.stations = [];
        this.adjacencyList = {}
        if (typeof (arguments[0]) === 'object') {
            arguments[0].forEach(routeData => {
                this.addTravelRoute(routeData[0],routeData[1],routeData[2]);
            });
        }
    }

    addStop(station) {
        this.stations.push(station);
        this.adjacencyList[station] = [];
    }

    addTravelRoute(station1, station2, distance) {
        if (this.stations.indexOf(station1) === -1) this.addStop(station1);
        if (this.stations.indexOf(station2) === -1) this.addStop(station2);
        this.adjacencyList[station1].push({ station: station2, distance: parseInt(distance, 10) });
        // this.adjacencyList[station2].push({ station: station1, distance: parseInt(distance, 10) });
    }

    isValidStation(station) {
        return this.stations.indexOf(station) === -1;
    }

    checkTravelRoute(startStation, endStation) {
        if (this.isValidStation(startStation) || this.isValidStation(endStation)) {
            return console.log('Error!!: Not a Valid Station');
        }
        let times = {};
        let backtrace = {};
        let pq = new PriorityQueue();
        times[startStation] = 0;

        this.stations.forEach(station => {
            if (station !== startStation) {
                times[station] = Infinity
            }
        });
        pq.enqueue([startStation, 0]);

        while (!pq.isEmpty()) {
            let shortestStep = pq.dequeue();
            let currentStation = shortestStep[0];
            this.adjacencyList[currentStation].forEach(neighbor => {
                let time = times[currentStation] + neighbor.distance;
                if (time < times[neighbor.station]) {
                    times[neighbor.station] = time;
                    backtrace[neighbor.station] = currentStation;
                    pq.enqueue([neighbor.station, time]);
                }
            });
        }

        let path = [endStation];
        let lastStep = endStation;
        let valuesRet = [...Object.values(backtrace), ...Object.keys(backtrace)];
        if (valuesRet.indexOf(endStation) === -1) {
            return console.log(`No routes from ${startStation} to ${endStation}`);
        }

        while (lastStep !== startStation) {
            path.unshift(backtrace[lastStep])
            lastStep = backtrace[lastStep]
        }
        return  console.log(`Your Trip from ${startStation} to ${endStation} includes ${path.length - 2} stops and will take ${times[endStation]} minutes`);
    }
}

class PriorityQueue {
    constructor() {
        this.collection = [];
    }
    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 1; i <= this.collection.length; i++) {
                if (element[1] < this.collection[i - 1][1]) {
                    this.collection.splice(i - 1, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    };
    dequeue() {
        let value = this.collection.shift();
        return value;
    };
    isEmpty() {
        return (this.collection.length === 0)
    };

}

module.exports = trainFrequency;