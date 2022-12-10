import React from 'react'

export default function Home () {
    return (
        <div className='home-page'>
            <div className='paragraph'>
                <div className='text-content'>
                <h2>Prohibition and the FDA</h2>
                    <p>In 1935, The Alcohol Administration Act <i>(now the TTB)</i> was created to generate tax revenue from alcohol after the end of Prohibition. <i>(1920-1935)</i> The TTB was also responsible for regulating alcohol labels.</p>
                    <p>A problem arose in 1990, the FDA required mandatory Nutrition Facts labels. Unfortunately, alcohol was regulated by the TTB, so alcohol was exempt. The only requirement for alcohol was to display their alcohol percentage.</p>
                 </div>
                <img src={require('../bar/cocktails/hazelnutOldFashioned.jpg')} alt="hazelnut old fashioned" />
            </div>
            <br />
            <div className='paragraph'>
                <div className='text-content'>
                    <h2>Fight for labels</h2>
                    <p>Multiple agencies have attempted to add the Nutrition Facts label. One time in particular, The Center for Science in the Public Interest attempted to file a motion to display the label on alcohol. The TTB responded to the motion by saying that adding a <i>Nutrition</i> Facts label will misrepresent the alcohol as being Nutritious. </p>
                </div>
                <img src={require('../bar/cocktails/newYorkSour.jpg')} alt="new york sour" />
            </div>
            <br />
            <div className='paragraph'>
                <div className='text-content'>
                    <h2>The Mission</h2>
                    <p>Neat on the Rocks was created to give the general public an idea of the macronutrients they are consuming when they drink a cocktail. I have a background in bartending, chemistry and nutrition. I found this as an opportunity to incorporate my passions into a project. This is just the beginning. I’m currently working on a dilution calculator that ensures the final product is always the perfect drink. Further releases will contain a cocktail page that contains some of my specialty cocktails and an e-commerce section to buy everything needed to get started on your journey to becoming the best bartender or party host. </p>
                </div>
            <img src={require('../bar/cocktails/cadillacMargarita.jpg')} alt="hazelnut old fashioned" />
            </div>
        </div>
    )
}