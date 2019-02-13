import React, {Component} from 'react';
// Подключаем API Яндекс-карт
import {
    YMaps,
    Map,
    GeoObject,
    Placemark,
    RouteEditor,
    RulerControl,
    ListBox,
    ListBoxItem,
    RoutePanel
} from 'react-yandex-maps';


const mapState = {center: [55.76, 37.64], zoom: 10};


export default class MyMap extends Component {

    state = {showMap: true};


    render() {
        const {showMap} = this.state;

        return (
            <YMaps>
                <div id="map-basics">
                    <Map state={mapState} id={'map'} width={'100%'} height={'100%'}>

                        <div className="aside">


                            <RoutePanel/>
                            <div>

                            </div>
                        </div>
                        <GeoObject
                            // The geometry description.
                            geometry={{
                                type: 'Point',
                                coordinates: [55.8, 37.8],
                            }}
                            // Properties.
                            properties={{
                                // The placemark content.
                                iconContent: '1',
                                hintContent: 'Точка 1',
                            }}
                            // Options.
                            options={{
                                // The placemark's icon will stretch to fit its contents.
                                preset: 'islands#blackStretchyIcon',
                                // The placemark can be moved.
                                draggable: true,
                            }}
                        />

                        <GeoObject
                            // The geometry description.
                            geometry={{
                                type: 'Point',
                                coordinates: [55.7, 37.8],
                            }}
                            // Properties.
                            properties={{
                                // The placemark content.
                                iconContent: '2',
                                hintContent: 'Точка 2',
                            }}
                            // Options.
                            options={{
                                // The placemark's icon will stretch to fit its contents.
                                preset: 'islands#blackStretchyIcon',
                                // The placemark can be moved.
                                draggable: true,
                            }}
                        />
                    </Map>
                </div>
            </YMaps>
        );
    }
}