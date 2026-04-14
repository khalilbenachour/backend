class AppareilsService {
    constructor() {
        this.devices = [];
    }

    // Create a new device
    createDevice(device) {
        this.devices.push(device);
        return device;
    }

    // Get all devices
    getAllDevices() {
        return this.devices;
    }

    // Get device by ID
    getDeviceById(id) {
        return this.devices.find(device => device.id === id);
    }

    // Update device
    updateDevice(id, updatedDevice) {
        const index = this.devices.findIndex(device => device.id === id);
        if (index !== -1) {
            this.devices[index] = { ...this.devices[index], ...updatedDevice };
            return this.devices[index];
        }
        return null;
    }

    // Delete device
    deleteDevice(id) {
        const index = this.devices.findIndex(device => device.id === id);
        if (index !== -1) {
            return this.devices.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = AppareilsService;