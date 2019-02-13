import React, {Component} from 'react';
import dots from './data/data';
import 'https://yandex.st/jquery/2.2.3/jquery.min.js';
import '../../yamap'


const mapState = {center: [55.76, 37.64], zoom: 10};


export default class MyMap extends Component {

    componentDidMount(){
        ymaps.ready(init);

        function init () {
            var myMap = new ymaps.Map('map', {
                    center: [55.76, 37.64],
                    zoom: 10
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                objectManager = new ymaps.ObjectManager({
                    // Чтобы метки начали кластеризоваться, выставляем опцию.
                    clusterize: true,
                    // ObjectManager принимает те же опции, что и кластеризатор.
                    gridSize: 32,
                    clusterDisableClickZoom: true
                });

            // Чтобы задать опции одиночным объектам и кластерам,
            // обратимся к дочерним коллекциям ObjectManager.
            objectManager.objects.options.set('preset', 'islands#greenDotIcon');
            objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
            myMap.geoObjects.add(objectManager);

                objectManager.add(dots);


        }
    }

    state = {showMap: true};


    render() {
        let showMap = this.state;

        return (
            <div id='map'></div>
        );
    }
}