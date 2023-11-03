import { useState } from "react";

export function TwiiterFollowCard({ children, formatuserName, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    //desestructuracion , esto de arriba, es equivalente a esto de abajo:

    /*     
    const state = useState(false);
    const isFollowing = state[0];
    const setIsFolling = state[1]; */

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button ';
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`} alt="Avatar midudev" />
                <div>
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName"> {formatuserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text} </span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}