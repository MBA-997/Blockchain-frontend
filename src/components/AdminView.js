import React from "react";
import InfoGrid from "./InfoGrid";
import ChangeAddress from "./ChangeAddress";
import Announce from "./Announce";

const AdminView = () => {
  return (
    <div>
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
        <Announce />
      </div>

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
    </div>
  );
};

export default AdminView;
