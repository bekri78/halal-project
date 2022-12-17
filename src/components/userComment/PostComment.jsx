import React, { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase.config";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./UserComment.css";
import Commentaire from "./Commentaire";

export default function PostComment({ post, user }) {
  const [edit, setEdit] = useState(false);
  const [editMessage, setEditMessage] = useState(null);
  const dateFormater = (date) => {
    let days = Math.floor((new Date() - new Date(date)) / (1000 * 3600 * 24));

    if (days === 0) {
      return "aujourd'hui";
    } else if (days === 1) {
      return " il y a un 1 jour";
    } else {
      return `il y a ${days} jours`;
    }
  };
  console.log("post", post);

  const handleEdit = () => {
    setEdit(false);
    if (editMessage) {
      updateDoc(doc(db, "posts", post.id), { message: editMessage });
    }
  }

    const handleDelete = () => {
      deleteDoc(doc(db,"posts",post.id))
      
    }
 
  return (
    <>
      {post.id && post.author && (
        <ListItem alignItems="flex-start" style={{ width: "50%" }}>
          <ListItemAvatar>
            <Avatar alt="userPhoto "> {post.author[0]}</Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={post.author}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {" "}
                  <span className="noteAvis"> </span>
                </Typography>

                <br />
                {edit ? (
                  <>
                    <textarea
                      autoFocus
                      defaultValue={editMessage ? editMessage : post.message}
                      onChange={(e) => setEditMessage(e.target.value)}
                    ></textarea>
                    <button onClick={() => handleEdit()}>Valider</button>
                  </>
                ) : (
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {editMessage ? editMessage : post.message}
                  </Typography>
                )}

                <br />

                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Posté {dateFormater(post.date)}
                </Typography>
                {post.authorId === user?.uid && (
                  <>
                    <button onClick={()=> handleDelete()}> supprimé</button>
                    <button onClick={() => setEdit(!edit)}> editer</button>
                  </>
                )}
                <Commentaire/>
              </React.Fragment>
            }
          />
          <ListItemText />
        </ListItem>
      )}
    </>
  );
}
