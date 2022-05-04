import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { BACKEND, COLUMNS } from "../../Utils/helper";
import Loading from "../Loading/Loading";

function Summary() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [data, setData] = useState([]);
  React.useEffect(() => {
    fetch(`${BACKEND.ADDRESS}/api/user/`)
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);
        setData(res);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("Failed to fetch data, try again.");
        console.log(error);
      });
  }, []);
  const RenderTable = () => {
    return error ? (
      <div className="center-div">{error}</div>
    ) : (
      <DataGrid
        rows={data}
        columns={COLUMNS}
        pageSize={20}
        components={{ Toolbar: GridToolbar }}
      />
    );
  };
  return (
    <div style={{ height: 700, width: "100%" }}>
      {isLoading ? <Loading /> : <RenderTable />}
    </div>
  );
}

export default Summary;
