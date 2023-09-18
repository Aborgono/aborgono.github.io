import './HowToPlay.scss';

function HowToPlay() {

    return (
    <div className="how-to-play">
        <h2 className="how-to-play__title">How to Play</h2>
        <ul className="how-to-play__list">
            <li className="how-to-play__item">Type in username and select the mode you would like to play</li>
            <li className="how-to-play__item">Once selected, click "Start Game" where you will be redirected to the maze</li>
            <li className="how-to-play__item">Your objective: complete the maze</li>
            <li className="how-to-play__item">The "showmaze" button deducts 10 points from your total score</li>
            <li className="how-to-play__item">However, running into a wall resets you to the starting position and deducts 15 points from your total score</li>
            <li className="how-to-play__item">The end point will be marked in red</li>
        </ul>
    </div>
    );
}

export default HowToPlay;