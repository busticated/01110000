import { expect } from 'chai';
import { getLibrariesResponseJSON } from '../_test/data.js';
import Libraries from './libraries.js';


describe('Model: Libraries Collection', function(){
    it('initializes', () => {
        const libs = new Libraries();

        expect(libs).to.exist;
        expect(libs).to.respondTo('getPage');
        expect(libs).to.respondTo('addPage');
    });

    it('adds a page of data', () => {
        const json = getLibrariesResponseJSON();
        const libs = new Libraries();

        libs.addPage(json);

        expect(libs.count()).to.equal(10);
        expect(libs.getIDs()).to.eql(['arduinojson', 'neopixel', 'internetbutton',
            'blynk', 'httpclient', 'onewire', 'adafruit_dht', 'mqtt',
            'sparkfunmicrooled', 'spark-dallas-temperature']);
    });

    it('does not add duplicate data', () => {
        const json = getLibrariesResponseJSON();
        const libs = new Libraries();

        libs.addPage(json);
        libs.addPage(json);
        libs.addPage(json);

        expect(libs.count()).to.equal(10);
        expect(libs.getIDs()).to.eql(['arduinojson', 'neopixel', 'internetbutton',
            'blynk', 'httpclient', 'onewire', 'adafruit_dht', 'mqtt',
            'sparkfunmicrooled', 'spark-dallas-temperature']);
    });

    it('paginates data', () => {
        const json = getLibrariesResponseJSON();
        const libs = new Libraries({ pageSize: 5 });

        libs.addPage(json);

        expect(libs.count()).to.equal(10);
        expect(libs.getPage()).to.have.lengthOf(5);
        expect(libs.getPage().map(lib => lib.id)).to.eql(['ArduinoJson',
            'neopixel', 'InternetButton', 'blynk', 'HttpClient']);
        expect(libs.getPage(1)).to.have.lengthOf(5);
        expect(libs.getPage(1).map(lib => lib.id)).to.eql(['OneWire',
            'Adafruit_DHT', 'MQTT', 'SparkFunMicroOLED',
            'spark-dallas-temperature']);
    });

    it('pages forward and back', () => {
        const json = getLibrariesResponseJSON();
        const libs = new Libraries({ pageSize: 2 });

        libs.addPage(json);
        let page = libs.getPage();

        expect(libs.count()).to.equal(10);
        expect(page).to.have.lengthOf(2);
        expect(page.map(lib => lib.id)).to.eql(['ArduinoJson', 'neopixel']);
        expect(libs.pageNumber).to.equal(0);

        page = libs.nextPage();

        expect(page).to.have.lengthOf(2);
        expect(page.map(lib => lib.id)).to.eql(['InternetButton', 'blynk']);
        expect(libs.pageNumber).to.equal(1);

        page = libs.previousPage();

        expect(page).to.have.lengthOf(2);
        expect(page.map(lib => lib.id)).to.eql(['ArduinoJson', 'neopixel']);
        expect(libs.pageNumber).to.equal(0);
    });

    it('won\'t page past start or end of collection', () => {
        const json = getLibrariesResponseJSON();
        const libs = new Libraries().addPage(json);

        expect(libs.count()).to.equal(10);
        expect(libs.getIDs()).to.eql(['arduinojson', 'neopixel', 'internetbutton',
            'blynk', 'httpclient', 'onewire', 'adafruit_dht', 'mqtt',
            'sparkfunmicrooled', 'spark-dallas-temperature']);
        expect(libs.nextPage()).to.not.exist;
        expect(libs.nextPage()).to.not.exist;
        expect(libs.nextPage()).to.not.exist;
        expect(libs.pageNumber).to.equal(0);
        expect(libs.previousPage()).to.not.exist;
        expect(libs.previousPage()).to.not.exist;
        expect(libs.previousPage()).to.not.exist;
        expect(libs.pageNumber).to.equal(0);
    });
});
