import React from "react";
import "../styles/home.modules.css";
import icon from "../assets/logo.png";
import coin from "../assets/coin.png";
import universal from "../assets/universal.png";
import { useHistory } from "react-router-dom";
import Text from "../components/Text";
import Button from "../components/Button";
import Img from "../components/Img"

function Home() {
  const history = useHistory();
  return (
    <div>
      <div className="background">
        <Img variant="depeople" src={icon} alt="icon" />
        <div className="frame">
          <Text component="text" variant="primary">
            MANIFESTING&nbsp;&nbsp;THE&nbsp;&nbsp;FIRST
          </Text>
          <img src={universal} alt="universal text" />
          <Text
            component="text"
            variant="secondary"
            style={{
              marginTop: "-50px",
            }}
          >
            conglomerate
          </Text>
          <Text
            component="text"
            variant="primary"
            letterSpacing="6.1px"
            textShadow="0px 2.94141px 2.94141px rgba(0, 0, 0, 0.25)"
            fontSize="44.8px"
            style={{
              marginTop: "-10px",
            }}
          >
            FOR&nbsp;CRYPTO&nbsp;COMMUNITIES
          </Text>
        </div>
        <div className="frame2">
          <Img variant="coin" src={coin} alt="coin" />
          <div className="group">
            <Text
              variant="default"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              fontSize="32px"
              style={{ margin: "2vh 0" }}
            >
              stake <b>dé</b>
            </Text>
            <Text variant="default" lineHeight="19px">
              and earn promising returns from our products, services and
              ventures as dividends .
            </Text>
          </div>
          <Button
            className="buttonclass"
            onClick={() => {
              history.push("/Navigation");
            }}
          >
            <b>stake</b>&nbsp;now.
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
