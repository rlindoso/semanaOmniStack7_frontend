import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Rafael Lindoso</span>
                            <span className="place">Recife</span>
                        </div>
                        <img src={more} alt="Mais" />
                        <div className="user-info">
                        </div>
                    </header>

                    <img src="http://localhost:3333/files/todoroki 1.jpg" alt=""/>
                    <footer>
                        <div className="action">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>
                        <p>
                            Um poste legal!
                            <span>#react #myheroacademia #todoroki</span>
                        </p>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className="user-info">
                            <span>Rafael Lindoso</span>
                            <span className="place">Recife</span>
                        </div>
                        <img src={more} alt="Mais" />
                        <div className="user-info">
                        </div>
                    </header>

                    <img src="http://localhost:3333/files/todoroki 1.jpg" alt=""/>
                    <footer>
                        <div className="action">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>
                        <p>
                            Um poste legal!
                            <span>#react #myheroacademia #todoroki</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;