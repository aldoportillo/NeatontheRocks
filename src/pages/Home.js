import React from 'react'

export default function Home () {
    return (
        <div className='home-page'>
            <div className='paragraph'>
                <div className='text-content'>
                <h2>Prohibition and the FDA</h2>
                    <p>In 1935, The Alcohol Administration Act (now the TTB) was created to generate tax revenue from alcohol after the end of Prohibition. (1920-1935) The TBB was also responsible for regulating alcohol labels.</p>
                    <p>A problem arose in 1990, the FDA required mandatory Nutrition Facts labels. Unfortunately, alcohol was regulated by the TTB, so they were exempt. At the time the TTB just required alcohol percentage except for beer until 1995 when beer won their right to display alcohol percentage as well.</p>
                </div>
                <img src={require('../bar/cocktails/hazelnutOldFashioned.jpg')} alt="hazelnut old fashioned" />
            </div>
            <br />
            <div className='paragraph'>
                <div className='text-content'>
                    <h2>Fight for labels</h2>
                    <p>Multiple agencies have attempted to add the label to alcohol such as the Center for science in the public interest the TTB said that putting the nutrition facts on label would make people think its nutritious</p>
                </div>
                <img src={require('../bar/cocktails/newYorkSour.jpg')} alt="new york sour" />
            </div>
            <br />
            <div className='paragraph'>
                <div className='text-content'>
                    <h2>The Mission</h2>
                    <p>Neat on the Rocks was created because I have always enjoyed a drink but more importantly I have taken my health serious. I always wished there was a calculator that would tell me exactly what I am drinking, so I made it. </p>
                </div>
            <img src={require('../bar/cocktails/cadillacMargarita.jpg')} alt="hazelnut old fashioned" />
            </div>
            <br />
            <h2>Disclaimer</h2>
            <p>Alcohol Facts are still difficult to find, and I have made a database with some of the most common spirits, cordials, and mixers. There could be a slight uncertainty when it comes to some of the macro nutrients, but I am certain this is as close as it gets. Thank you for taking your time to visit the site, and Cheers!</p>
        </div>
    )
}