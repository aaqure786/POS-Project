import React, { useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  FaColumns,
  FaEdit,
  FaEye,
  FaFileCsv,
  FaFileExcel,
  FaFilePdf,
  FaPrint,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import ViewStockTransfer from "../StockTransfer/ViewStockTransfer";
import UpdateStatus from "../StockTransfer/UpdateStatus";

const StockTransferTbl = () => {
  //FOR DUMMY DATA

  const dummyData = [
    {
      id: 1,
      date: "11/12/23",
      fromLocation: "islamabad",
      toLocation: "rawalpindi",
      status: "pending",
      Email: "username@gmail.com",
      charges: "50$",
      totalAmount: "100$",
      action: "transfer",
    },
    {
      id: 2,
      date: "11/12/23",
      fromLocation: "islamabad",
      toLocation: "rawalpindi",
      status: "pending",
      Email: "username@gmail.com",
      charges: "50$",
      totalAmount: "100$",
      action: "transfer",
    },
    {
      id: 3,
      date: "11/12/23",
      fromLocation: "islamabad",
      toLocation: "rawalpindi",
      status: "pending",
      Email: "username2@gmail.com",
      charges: "50$",
      totalAmount: "100$",
      action: "transfer",
    },
    {
      id: 4,
      date: "11/12/23",
      fromLocation: "islamabad",
      toLocation: "rawalpindi",
      status: "pending",
      Email: "username3@gmail.com",
      charges: "50$",
      totalAmount: "100$",
      action: "transfer",
    },
    {
      id: 5,
      date: "11/12/23",
      fromLocation: "islamabad",
      toLocation: "rawalpindi",
      status: "pending",
      Email: "username4@gmail.com",
      charges: "50$",
      totalAmount: "100$",
      action: "transfer",
    },
    {
      id: 6,
      date: "11/12/23",
      fromLocation: "islamabad",
      toLocation: "rawalpindi",
      status: "pending",
      Email: "username5@gmail.com",
      charges: "50$",
      totalAmount: "100$",
      action: "transfer",
    },
    {
      id: 7,
      date: "11/12/23",
      fromLocation: "islamabad",
      toLocation: "rawalpindi",
      status: "pending",
      Email: "username6@gmail.com",
      charges: "50$",
      totalAmount: "100$",
      action: "transfer",
    },
  ];
  const printRef = useRef();

  let xlDatas = [];

  //Export to Excel
  const handleExportExcl = (dummyData) => {
    dummyData.map((xlData) => {
      return xlDatas.push(xlData);
    });

    const wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(xlDatas);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet");
    XLSX.writeFile(wb, "user.xlsx");
  };

  //Export to pdf

  const generatePDF = () => {
    // const input = document.getElementById('mytable');
    htmlToImage
      .toCanvas(document.getElementById("usertbl"), { quality: 0.95 })
      .then(function (dataUrl) {
        const imgData = dataUrl.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("download.pdf");
      });
  };

  const [crpage, setCrpage] = useState(1);
  const rcrdprpg = 5;
  const lasIndex = crpage * rcrdprpg;
  const frstIndex = lasIndex - rcrdprpg;
  const record = dummyData.slice(frstIndex, lasIndex);
  const npage = Math.ceil(dummyData.length / rcrdprpg);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [colvis, setColvis] = useState(false);
  const [col1, setCol1] = useState(true);
  const [col2, setCol2] = useState(true);
  const [col3, setCol3] = useState(true);
  const [col4, setCol4] = useState(true);
  const [col5, setCol5] = useState(true);
  const [col6, setCol6] = useState(true);
  const [col7, setCol7] = useState(true);
  const [col8, setCol8] = useState(true);
  const [col9, setCol9] = useState(true);

  const [isedit, setIsedit] = useState(false);
  
  
  const [isCliked, setIsCliked] = useState(false);
  const [actionList, setActionList] = useState(
    Array(record.length).fill(false)
  );

  const toggleDropdown = (index) => {
    const dropDownAction = [...actionList];
    dropDownAction.map((val, i) => {
        if (i === index) {
            dropDownAction[i] = !dropDownAction[i];

        } else {
            dropDownAction[i] = false
        }
        return dropDownAction
    })
    
    
    setActionList(dropDownAction);
};

  const csvData = [
    [
      "Id",
      "Date",
      "From Location",
      "To Location",
      "Status",
      "Email",
      "Charges",
      "Total Amount",
      "action",
    ],
    ...dummyData.map(
      ({
        id,
        date,
        fromLocation,
        toLocation,
        status,
        Email,
        charges,
        totalAmount,
        action,
      }) => [
        id,
        date,
        fromLocation,
        toLocation,
        status,
        Email,
        charges,
        totalAmount,
        action,
      ]
    ),
  ];

  //Function to print
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "ConsignmentReport",
    copyStyles: true,
    // pageStyle: "@page { size: 8.3in 11.7in }"
  });

  const prevPage = () => {
    if (crpage !== 1) {
      setCrpage(crpage - 1);
    }
  };
  const nextPage = () => {
    if (crpage !== numbers.length) {
      setCrpage(crpage + 1);
    }
  };

  const [isshow, setIsshow] = useState(false);
  const [showId, setShowId] = useState(0);
  const [upId, setUpId] = useState(0)
  const [dynWidthd, setDynWidthd] = useState('')
  const displayData = () => {
    if (showId !== 0 && isshow === true) {
      return <ViewStockTransfer id={showId} />;
    }else if (upId > 0){
      return <UpdateStatus id= {upId} />
    }
  };

  return (
    <div>
      <div className="flex  flex-col md:flex-row  items-center justify-center mt-3 md:justify-between mx-5">
        <div className="flex items-center justify-center my-2 md:my-0">
          <h1 className="text-sm mx-1">Show</h1>
          <select className="w-[100px] border-[1px] border-black focus:outline-none text-center">
            <option value={"25"}> 25</option>
            <option value={"50"}> 50</option>
            <option value={"100"}> 100</option>
            <option value={"200"}> 200</option>
            <option value={"500"}> 500</option>
            <option value={"1,000"}> 1,000</option>
            <option value={"All"}> All</option>
          </select>
          <h1 className="text-sm mx-1">enteries</h1>
        </div>
        <div className="flex items-center justify-center my-2 md:my-0">
          <button className="flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 ">
            <FaFileCsv size={15} className=" mt-1 pr-[2px]" />
            <CSVLink filename="users.csv" data={csvData}>
              <h1 className="text-sm">Export to CSV</h1>
            </CSVLink>
          </button>
          <button
            onClick={() => {
              handleExportExcl(dummyData);
            }}
            className="flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 "
          >
            <FaFileExcel size={15} className=" mt-1 pr-[2px]" />
            <h1 className="text-sm">Export to Excle</h1>
          </button>
          <button
            onClick={handlePrint}
            className="flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 "
          >
            <FaPrint size={15} className=" mt-1 pr-[2px]" />
            <h1 className="text-sm">Print</h1>
          </button>
          <button
            onClick={() => {
              setColvis(!colvis);
            }}
            className="flex border-[1px] relative px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 "
          >
            <FaColumns size={15} className=" mt-1 pr-[2px]" />
            <h1 className="text-sm">Column Visibility</h1>
            {colvis && (
              <div className="absolute top-7 shadow-md shadow-gray-400 bg-white w-[150px]">
                <ul className="flex flex-col items-center justify-center">
                  <li
                    className={` w-full py-1 ${
                      col1 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol1(!col1);
                    }}
                  >
                    Date
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col2 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol2(!col2);
                    }}
                  >
                    Reference Number
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col3 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol3(!col3);
                    }}
                  >
                    Location(From)
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col4 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol4(!col4);
                    }}
                  >
                    Location(to)
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col5 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol5(!col5);
                    }}
                  >
                    Status
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col6 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol6(!col6);
                    }}
                  >
                    Shipping Charges
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col7 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol7(!col7);
                    }}
                  >
                    Total Amount
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col8 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol8(!col8);
                    }}
                  >
                    Additional Notes
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col9 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol9(!col9);
                    }}
                  >
                    Action
                  </li>
                </ul>
              </div>
            )}
          </button>
          <button
            onClick={generatePDF}
            className="flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 "
          >
            <FaFilePdf size={15} className=" mt-1 pr-[2px]" />
            <h1 className="text-sm">Export to PDF</h1>
          </button>
        </div>
        <div className="flex items-center justify-center  w-[250px] md:w-auto my-2 md:my-0 border-[1px] border-black">
          <FaSearch size={15} className=" mt-1 mx-1" />
          <input
            className=" focus:outline-none px-2 py-1"
            type="search"
            id="search"
            name="serch"
            placeholder="Search"
          />
        </div>
      </div>
      <div
        className="flex flex-col  overflow-x-scroll  mt-5 mx-5"
        ref={printRef}
      >
        <table id="usertbl" className="table-fixed  mb-10   px-5 ">
          <thead>
            <tr className="h-[60px]">
              {col1 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Date
                </th>
              )}
              {col2 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Reference Number
                </th>
              )}
              {col3 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Location(From)
                </th>
              )}
              {col4 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Location(to)
                </th>
              )}
              {col5 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Status
                </th>
              )}
              {col6 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Shipping Charges
                </th>
              )}
              {col7 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Total Amount
                </th>
              )}
              {col8 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Additional Notes
                </th>
              )}
              {col9 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {record.map((value, index) => {
              return (
                <tr key={index} className="">
                  {col1 && <td className="px-1 py-1 text-sm">{value.date}</td>}
                  {col2 && <td className="px-1 py-1"> {value.id}</td>}
                  {col3 && <td className="px-1 py-1">{value.fromLocation}</td>}
                  {col4 && <td className=" py-1 px-1">{value.toLocation}</td>}
                  {col5 && (
                    <td className="px-1 py-1 text-sm">
                      <button
                        onClick={() => {
                          setIsCliked(true);
                          setUpId(value.id)
                          setDynWidthd("50%")
                        }}
                        className="bg-green-400 text-white px-2 text-xs rounded-xl"
                      >
                        status
                      </button>
                    </td>
                  )}
                  {col6 && <td className=" py-1 px-1">{value.charges}</td>}

                  {col7 && <td className="px-1 py-1"> {value.totalAmount}</td>}
                  {col8 && <td className="px-1 py-1"> {value.Email}</td>}
                  {col9 && (
                    <td className="py-1 flex ">
                      <div
                        onClick={() => {
                          toggleDropdown(index);
                        }}
                        className="flex px-2 py-1 relative cursor-pointer items-center bg-green-600 rounded-xl text-white justify-center"
                      >
                        <h1 className="text-sm">Action</h1>
                        <AiFillCaretDown size={10} />
                        {actionList[index] && (
                          <ul className="absolute top-5 right-10 z-20 flex flex-col items-start w-[80px] bg-white text-gray-600 shadow-xl shadow-gray-400 ">
                            <li className="w-full">
                              <div
                                onClick={() => {
                                  setIsCliked(true);
                                  setIsshow(true);
                                  setShowId(value.id);
                                }}
                                className="flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center "
                              >
                                <FaEye size={15} />
                                <h1 className="text-sm">View</h1>
                              </div>
                            </li>
                            <li className="w-full">
                              <div
                                onClick={() => {
                                  setIsedit(!isedit);
                                  setIsCliked(!isCliked);
                                }}
                                className="flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center "
                              >
                                <FaPrint size={15} />
                                <h1 className="text-sm">Print</h1>
                              </div>
                            </li>
                            <li className="w-full">
                              <Link
                                to={`/home/sells/edit/${value.id}`}
                                onClick={() => {
                                  setIsedit(!isedit);
                                  setIsCliked(!isCliked);
                                }}
                                className="flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center "
                              >
                                <FaEdit size={15} />
                                <h1 className="text-sm">Edit</h1>
                              </Link>
                            </li>
                            <li className="w-full">
                              <div
                                onClick={() => {
                                  setIsedit(!isedit);
                                  setIsCliked(!isCliked);
                                }}
                                className="flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center "
                              >
                                <FaTrash size={15} />
                                <h1 className="text-sm">Delete</h1>
                              </div>
                            </li>
                            
                          </ul>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>
      <nav className="  my-2 w-full">
        <ul className="flex justify-end">
          <li>
            <button
              disabled={crpage === 1 ? true : false}
              className="p-3 mx-1 bg-green-400 text-white"
              onClick={prevPage}
            >
              {" "}
              Previous
            </button>
          </li>
          {numbers.map((n, i) => {
            return (
              <li
                key={i}
                className={`${
                  crpage === n ? "bg-blue-500" : ""
                } py-3 px-4 mx-1 border-[1px] border-gray-400`}
              >
                <button
                  onClick={() => {
                    setCrpage(n);
                  }}
                >
                  {n}
                </button>
              </li>
            );
          })}
          <li>
            <button
              className="p-3 bg-green-400 text-white mx-1 "
              onClick={nextPage}
            >
              {" "}
              Next
            </button>
          </li>
        </ul>
      </nav>
      {isCliked && (
        <div className="absolute top-0 flex flex-col items-center  justify-start right-0 bg-black/70 w-full min-h-screen">
          <div className={`flex flex-col   w-full md:w-[${dynWidthd  ? dynWidthd : "75%"}]  mt-10 bg-white px-5 pt-2`}>
            <div className="flex items-end justify-end ">
              <MdCancel
                onClick={() => {
                  setIsCliked(!isCliked);
                  setIsedit(false);
                  setIsshow(false);
                  setShowId(0);
                  setDynWidthd("")
                }}
                size={20}
              />
            </div>
            <div className="flex items-start justify-center">
              {displayData()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockTransferTbl;
