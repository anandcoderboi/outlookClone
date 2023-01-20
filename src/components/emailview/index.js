import React from "react";
import "../../styles/emaillist.scss";
import EmailList from "../emaillist";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmail } from "../../actions/fetchEmail";
import { fetchId } from "../../actions/fetchId";

const EmailView = ({ id, data }) => {
  const emailView = useSelector((state) => state.emailInfo);
  console.log(id);
  return (
    <div className="email-view">
      {id ? (
        <div>
          <div className="avatar avatar-div">
            <span className="avatar-logo">
              {emailView[id.id - 1].from.email[0]}
            </span>
          </div>
          <span className="title">{emailView[id.id].subject}</span>
          <div className="favorite">
            <button>Mark as Favorite</button>
          </div>
          <p>
            {Intl.DateTimeFormat("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            }).format(emailView[id.id].date)}
          </p>

          <p>{id.body}</p>
        </div>
      ) : (
        <div>Loading post...</div>
      )}
    </div>
  );
};

export default EmailView;
