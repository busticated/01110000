// NOTE: normally i'd stash this as json and use webpack's json-loader
function getLibrariesResponseJSON(){
    return {
        body: {
            data: [
                {
                    attributes: {
                        architectures: ['*'],
                        author: 'Benoit Blanchon <blog.benoitblanchon.fr>',
                        category: 'Data Processing',
                        installs: '4000',
                        maintainer: 'Benoit Blanchon <blog.benoitblanchon.fr>',
                        mine: false,
                        name: 'ArduinoJson',
                        paragraph: 'Like this project? Please star it on GitHub!',
                        sentence: 'An efficient and elegant JSON library for Arduino.',
                        url: 'https://bblanchon.github.io/ArduinoJson/',
                        version: '5.11.1',
                        visibility: 'public'
                    },
                    id: 'ArduinoJson',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/ArduinoJson/ArduinoJson-5.11.1-4a861bb8.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [],
                        author: 'Adafruit, Technobly',
                        installs: 9125,
                        license: 'LGPLv3',
                        mine: false,
                        name: 'neopixel',
                        repository: 'https://github.com/technobly/Particle-NeoPixel.git',
                        sentence: 'An Implementation of Adafruit\'s NeoPixel Library for the Spark Core, Particle Photon, P1, Electron and RedBear Duo',
                        url: 'https://github.com/technobly/Particle-NeoPixel',
                        verified: true,
                        version: '0.0.13',
                        visibility: 'public'
                    },
                    id: 'neopixel',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/neopixel/neopixel-0.0.13.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [],
                        author: 'Richard Whitney <richard@particle.io>',
                        installs: 7660,
                        license: 'LGPL',
                        mine: false,
                        name: 'InternetButton',
                        official: true,
                        sentence: 'Functions to make the Internet Button easy to use! If you have an original SparkButton, make sure to use `begin(1)`',
                        version: '0.1.11',
                        visibility: 'public'
                    },
                    id: 'InternetButton',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/InternetButton/InternetButton-0.1.11.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [
                            '*'
                        ],
                        author: 'Volodymyr Shymanskyy <vshymanskyi@gmail.com>',
                        category: 'Communication',
                        installs: 6182,
                        license: 'MIT',
                        maintainer: 'Volodymyr Shymanskyy <vshymanskyi@gmail.com>',
                        mine: false,
                        name: 'blynk',
                        sentence: 'Build a smartphone app for your project in minutes!',
                        url: 'http://blynk.cc',
                        version: '0.4.8',
                        visibility: 'public'
                    },
                    id: 'blynk',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/blynk/blynk-0.4.8-29c2f478.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [],
                        author: 'Nils Mattisson <nils.mattisson@gmail.com>',
                        installs: 5280,
                        license: 'MIT',
                        mine: false,
                        name: 'HttpClient',
                        repository: 'https://github.com/nmattisson/httpclient.git',
                        sentence: 'A work in progress Http Client Library for the Spark Core and Arduino.',
                        url: 'https://github.com/nmattisson/httpclient',
                        version: '0.0.5',
                        visibility: 'public'
                    },
                    id: 'HttpClient',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/HttpClient/HttpClient-0.0.5.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [],
                        author: 'Hotaman, Julien Vanier <julien@particle.io>',
                        installs: 5003,
                        license: 'MIT',
                        mine: false,
                        name: 'OneWire',
                        sentence: 'Dallas 1-Wire protocol with support for DS18B20, DS1820, DS1822',
                        verified: true,
                        version: '2.0.1',
                        visibility: 'public'
                    },
                    id: 'OneWire',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/OneWire/OneWire-2.0.1.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [],
                        author: 'RussGrue <rstockhammer@hotmail.com>',
                        installs: 4116,
                        license: 'MIT License',
                        mine: false,
                        name: 'Adafruit_DHT',
                        repository: 'https://github.com/russgrue/adafruit_dht_library.git',
                        sentence: 'Spark Core DHT Library based on Adafruit Arduino DHT Library',
                        url: 'https://github.com/russgrue/adafruit_dht_library',
                        version: '0.0.2',
                        visibility: 'public'
                    },
                    id: 'Adafruit_DHT',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/Adafruit_DHT/Adafruit_DHT-0.0.2.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [],
                        author: 'hirotakaster',
                        installs: 3235,
                        license: 'MIT',
                        mine: false,
                        name: 'MQTT',
                        repository: 'https://github.com/hirotakaster/MQTT.git',
                        url: 'https://github.com/hirotakaster/MQTT/',
                        version: '0.4.22',
                        visibility: 'public'
                    },
                    id: 'MQTT',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/MQTT/MQTT-0.4.22-0130dfdc.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [],
                        author: 'Jim Lindblom <jim@sparkfun.com>',
                        installs: 3105,
                        license: 'GPL v3',
                        mine: false,
                        name: 'SparkFunMicroOLED',
                        repository: 'https://github.com/sparkfun/sparkfun_micro_oled_particle_library.git',
                        sentence: 'A library to drive the SparkFun Photon Micro OLED shield.',
                        url: 'https://github.com/sparkfun/sparkfun_micro_oled_particle_library',
                        version: '1.3.0',
                        visibility: 'public'
                    },
                    id: 'SparkFunMicroOLED',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/SparkFunMicroOLED/SparkFunMicroOLED-1.3.0.tar.gz'
                    },
                    type: 'libraries'
                },
                {
                    attributes: {
                        architectures: [],
                        author: 'Tom de Boer <tom@tomdeboer.nl>',
                        dependencies: { 'one-wire': '*' },
                        installs: 2449,
                        license: 'MIT',
                        mine: false,
                        name: 'spark-dallas-temperature',
                        repository: 'https://github.com/tomdeboer/sparkcoredallastemperature.git',
                        sentence: 'A Spark Core ported, but otherwise untouched libary for controlling Dallas Temperature Sensors (DS18B20, DS18S20, DS1822,DS1820)',
                        url: 'https://github.com/tomdeboer/sparkcoredallastemperature',
                        version: '0.0.5',
                        visibility: 'public'
                    },
                    id: 'spark-dallas-temperature',
                    links: {
                        download: 'https://library-archives.particle.io/libraries/spark-dallas-temperature/spark-dallas-temperature-0.0.5.tar.gz'
                    },
                    type: 'libraries'
                }
            ]
        },
        statusCode: 200
    };
}

export { getLibrariesResponseJSON };
