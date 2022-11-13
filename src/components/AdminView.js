import React from "react";
import InfoGrid from "./InfoGrid";
import ChangeAddress from "./ChangeAddress";
import Announce from "./Announce";

const AdminView = () => {
  return (
    <div>
      <h2 style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
        Statistics
      </h2>
      <InfoGrid
        gridHeader="Monitor all Contract Parameters"
        gridObject={{
          "Smart Contract Address": "",
          "Total TRX Deposits All Time": 0,
          "Smart Contract Balance": 0,
          "Amount Withdrawn By Members": 0,
          "Amount In The Daily Pool": 0,
          "Daily Pool Countdown": "time",
          "Maximum Amount From Top Referrer": 0,
          "Referred By": "",
        }}
      />
      {/* <InfoGrid
        gridHeader="PERSONAL STATISTIC"
        gridObject={{
          "Your Address": "",
          "Next Income Countdown": "time",
          "210% Income Limit Remain": 0,
          "Daily Income 7%": 0,
          "Direct Referrel Income": 0,
          "Matching Bonus": 0,
          "TOP Sponsor Rewards": 0,
          "Income Withdrawn To Wallet": 0,
          "Unwithdrawn Income": 0,
        }}
        gridButton={{
          icon: LocalAtmIcon,
          variant: "text",
          color: "warning",
          iconColor: "#4cbb17",
          value: "Withdraw",
          link: "somelink",
        }}
      /> */}

      {/* <InfoGrid
        gridHeader="Statistics"
        gridObject={{
          "Total Amount Of Desposited TRX": 0,
          "Total Amount Of Received TRX": 0,
        }}
      /> */}

      <InfoGrid
        gridHeader="Request to change Wallet address"
        gridObject={{
          "Change Smart Contract Address": <ChangeAddress />,
          "Change Admin Wallet Address": <ChangeAddress />,
          "Change Client Contract Address": <ChangeAddress />,
        }}
      />

      <InfoGrid
        gridHeader="Request to change Data "
        gridObject={{
          "Change Smart data Address": "",
          "Change Admin data Address": "",
          "Change Client data Address": "",
        }}
      />

      <InfoGrid
        gridHeader="View Complete Tree of the Whole Contract"
        gridButton={{
          variant: "contained",
          color: "secondary",
          value: "View Tree",
          link: "somelink",
        }}
      />

      <Announce />
    </div>
  );
};

export default AdminView;
