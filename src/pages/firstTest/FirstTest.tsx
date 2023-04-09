import React from 'react';
import {Test1Task3} from '../../components/Test1Task3/Test1Task3';
import {Test1Task1} from "../../components/Test1Task1/Test1Task1";
import {Test1Task2} from "../../components/Test1Task2/Test1Task2";
import {Test1Task4} from "../../components/Test1Task4/Test1Task4";
import {Test1Task5} from "../../components/Test1Task5/Test1Task5";
import {Test1Task6} from "../../components/Test1Task6/Test1Task6";
import {Test1Task7} from "../../components/Test1Task7/Test1Task7";
import './firstTest.css'

export const FirstTest = () => {

    let varTest: {numVar: number, varChapter1: number, cegment: string, p:number, smesh: number} = {
        numVar: 2,
        p: 5,
        varChapter1: 1023,
        cegment: 'b',
        smesh: 5
    };

    return(
        <div>
            <form>
                <p className="text-center">
                    <span className="h_1">Контрольная работа № 1
                    <br />
                    Вариант № {varTest.numVar} </span>
                </p>

                <br />

                <Test1Task1 varChapter1 = {varTest.varChapter1} />
                <br/>

                <Test1Task2 varChapter1 = {varTest.varChapter1} p = {varTest.p}/>
                <br/>

                <Test1Task3 cegment = {varTest.cegment} smesh = {varTest.smesh}/>
                <br />

                <Test1Task4 />

                <Test1Task5 />

                <Test1Task6 />

                <Test1Task7 />
            </form>
        </div>
    )
}