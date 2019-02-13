import React, { Component } from 'react';
import MyMap from './MyMap'
import './Main.css';
// Подключаем API Яндекс-карт
import { SearchControl, YMaps, Map} from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

export default class Main extends Component {
    render() {
        return (
            <main>

                <MyMap/>
            </main>
        );
    }
}


