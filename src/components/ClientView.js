import React from "react";
import InfoGrid from "./InfoGrid";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Button from "@mui/material/Button";

const ClientView = () => {
  return (
    <div>
      <h2 style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
        Statistics
      </h2>
      <InfoGrid
        gridHeader="SMART CONTRACT INFO"
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
        gridHeader="Insurance"
        gridObject={{
          "Insurance Contract Address": "",
          "Insurance Balance": 0,
        }}
      />

      <InfoGrid
        gridHeader="Statistics"
        gridObject={{
          "Smart Contract Address": "",
          "Net Smart Contract Balance": 0,
          "Total TRX deposits (All Time)": 0,
          "Amount Automatically Credited To Members (All Time)": 0,
          "Project Insurance Balance": 0,
          "Daily Pool Countdown": "time",
        }}
      />

      <InfoGrid
        gridHeader="Organization"
        gridObject={{
          "Invitation Link": (
            <Button
              color="secondary"
              variant="contained"
              // href={'somelink'}
            >
              Copy
            </Button>
          ),
          "Personal Invited Partners": 0,
          "Deposited By Personal Invited Partners": 0,
          "Total Number Of Partners": 20,
          "Total Deposited By Structure": 0,
          "Total Community Participants": 0,
        }}
        gridButton={{
          icon: AccountTreeIcon,
          variant: "contained",
          color: "secondary",
          iconColor: "white",
          value: "Structure",
          link: "somelink",
        }}
      />
    </div>
  );
};

export default ClientView;
