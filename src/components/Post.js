import React, { useState, useEffect } from 'react'
import './Post.css';
import firebase from 'firebase';
import Avatar from "@material-ui/core/Avatar";
import { db } from '../firebase';



function Post({ postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db.collection("posts").doc(postId).collection("comments").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
                setComments(snapshot.docs.map(doc => ({ comm: doc.data() })));
            });
        }



        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (e) => {
        e.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }


    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="thisS"
                    src="https://images.ctfassets.net/hrltx12pl8hq/3Q0QDN9w
                YXdNcxqwhzJQzm/b3a92e16b58cc63c5ede83a1728c9490/LOHP_Ma
                kers_FT_hero.jpg?fit=fill&w=800&h=450"
                />
                <h1>{username}</h1>
            </div>
            <img className="post__image" src={imageUrl} alt="" />
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>


            <div className="post__comments">
                {
                    comments.map(({ comm }) => {
                        return (
                            <p>
                                <strong className="this">{comm.username}</strong>{comm.text}
                            </p>
                        )
                    })
                }
            </div>
            {user &

                <form className="post__commentbox">
                    <input className="post__input" type="text" placeholder="add comments"
                        value={comment} onChange={e => setComment(e.target.value)} />

                    <button className="post__button" disabled={!comment} type="submit" onClick={postComment}>Post</button>
                </form>
            }

        </div>
    )
}

export default Post
