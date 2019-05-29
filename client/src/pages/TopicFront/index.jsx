import React, { useEffect, useState } from "react";
import EventMap from "../../events/components/EventMap";
import axios from "axios";
import { getCookie } from "tiny-cookie";
import PageTitle from "../../modules/PageTitle";
import { checkTokenTime } from "../../helpers/requests";
import SpinButton from "../../common/SpinButton";
import { GET_TOPIC } from "../../constants";
import Button from "../../common/Button";
import parser from "html-react-parser";
import {
  // checkerNone,
  letterTransform,
  regularity,
  timeConverter,
  checkerProp,
} from "../../helpers/helpers";

const getDataEvent = id => {
  // checkTokenTime(sessionStorage.getItem("tokenTimeOver"));
  return axios(GET_TOPIC(id), {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  })
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
};

const TopicFront = ({
  userEventsIds = [],
  onSubscriptionClick,
  onUnsubscriptionClick,
  isLoading,
  currentLoadingEvents = [],
  match,
  history,
  isAdmin,
}) => {
  const [linkHover, setHover] = useState(false);

  const id = match.params.id;
  const isSubscribed = userEventsIds.includes(id);
  const mouseEvents = {
    mouseOver: () => {
      setHover(true);
    },
    mouseOut: () => {
      setHover(false);
    },
    click: () => {
      history.goBack();
    },
  };

  const toEdit = () => {
    history.push(`/admin/topic-create/${id}`);
  };

  const [eventData, setEvent] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataEvent(id);
      setEvent(result.data[0]);
    };
    fetchData();
  }, []);

  return (
    <>
      {!isAdmin ? (
        <PageTitle
          title={
            !linkHover
              ? `${checkerProp(eventData.title) ? "Default title" : eventData.title}`
              : // letterTransform(checkerNone(eventData.title))
                "← Back"
          }
          mouseOver={mouseEvents.mouseOver}
          mouseOut={mouseEvents.mouseOut}
          click={mouseEvents.click}
        />
      ) : (
        ""
      )}
      <div className="topic-wrapper">
        <div className="map-section_container">
          <div className="section_header">
            <h2>
              Topic "
              {checkerProp(eventData.title) ? "Default title" : letterTransform(eventData.title)
              // letterTransform(checkerNone(eventData.title))
              }
              "
            </h2>
            {isAdmin ? (
              <Button text={"Edit"} onClick={toEdit} />
            ) : (
              <SpinButton
                text={isSubscribed ? "Unsubscribe" : "Subscribe"}
                type={isSubscribed ? "Unsubscribe" : "Subscribe"}
                isLoading={isLoading || currentLoadingEvents.includes(id)}
                disabled={!eventData.active}
                onClick={() => {
                  if (isSubscribed) {
                    onUnsubscriptionClick(id);
                  } else {
                    onSubscriptionClick(id);
                  }
                }}
              />
            )}
          </div>
          <p className="section__descr">
            {parser(
              checkerProp(eventData.description) ? "Default description" : eventData.description,
              // checkerNone(eventData.description)
            )}
          </p>
          <div className="section__place">
            <h3 className="section__topic__title">Place:</h3>
            <p className="place__descr">
              {checkerProp(eventData.address) ? "Default address" : eventData.address
              // letterTransform(checkerNone(eventData.address))
              }
            </p>
          </div>
          <div className="time__descr">
            <h3 className="section__topic__title">Time:</h3>
            <p className="time__descr">
              {eventData.cyclic
                ? `Every ${regularity[eventData.weekDay]}, ${
                    checkerProp(eventData.time) ? "Default time" : eventData.time
                    // checkerNone(eventData.time)
                  }`
                : `${
                    checkerProp(eventData.singleDate)
                      ? "Default singleDate"
                      : timeConverter(eventData.singleDate)
                  } - ${
                    checkerProp(eventData.time) ? "Default time" : eventData.time
                    // checkerNone(eventData.time)
                  }`}
            </p>
          </div>
          <div className="map__descr">
            <h3 className="section__topic__title">Map:</h3>
            {eventData.location ? (
              <EventMap location={eventData.location} />
            ) : (
              <span>Map is not ready</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicFront;
