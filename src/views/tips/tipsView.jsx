import React from 'react';
import TipsCard from './components/card';
import "./styles/styles.css";

const TipsView = ({tips=[]}) =>  (
    <div className="tips-container">
        <h2>Revisa los tips que tenemos para ti.</h2>
        <div className="tips-list">
        {tips.map((d,i)=>(
            <TipsCard key={i} tip={d} />
        ))}
        </div>
    </div>
);

export default TipsView;