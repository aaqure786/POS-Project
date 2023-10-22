import React, { useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  FaColumns,
  FaEdit,
  
  FaFileCsv,
  FaFileExcel,
  FaFilePdf,
  FaMoneyBillAlt,
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
import ViewSell from "../sell/ViewSell";
import ViewPayment from "../payments/ViewPayment";

const Expensestbl = () => {
  const dummyData = [
    {
      id: 1,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
      Date: "11/12/23",
      RefNo: "123",
      RecurringDetails: "DEMO",
      ExpensesCategory: "Test category",
      SubCategory: "test subcategory",
      Location: "ISLAMABAD",
      PaymentStatus: "PAYMENT STATUS",
      Tax: "200",
      TotalAmount: "2000",
      PaymentDue: "300",
      Expensesfor: "petrol",
      Contact: "313131331",
      ExpenseNote: "dsad",
      Addedby: "3213",
    },
    {
      id: 2,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
      Date: "11/12/23",
      RefNo: "123",
      RecurringDetails: "DEMO",
      ExpensesCategory: "Test category",
      SubCategory: "test subcategory",
      Location: "ISLAMABAD",
      PaymentStatus: "PAYMENT STATUS",
      Tax: "200",
      TotalAmount: "2000",
      PaymentDue: "300",
      Expensesfor: "petrol",
      Contact: "313131331",
      ExpenseNote: "dsad",
      Addedby: "3213",
    },
    {
      id: 3,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
      Date: "11/12/23",
      RefNo: "123",
      RecurringDetails: "DEMO",
      ExpensesCategory: "Test category",
      SubCategory: "test subcategory",
      Location: "ISLAMABAD",
      PaymentStatus: "PAYMENT STATUS",
      Tax: "200",
      TotalAmount: "2000",
      PaymentDue: "300",
      Expensesfor: "petrol",
      Contact: "313131331",
      ExpenseNote: "dsad",
      Addedby: "3213",
    },
    {
      id: 4,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
      Date: "11/12/23",
      RefNo: "123",
      RecurringDetails: "DEMO",
      ExpensesCategory: "Test category",
      SubCategory: "test subcategory",
      Location: "ISLAMABAD",
      PaymentStatus: "PAYMENT STATUS",
      Tax: "200",
      TotalAmount: "2000",
      PaymentDue: "300",
      Expensesfor: "petrol",
      Contact: "313131331",
      ExpenseNote: "dsad",
      Addedby: "3213",
    },
    {
      id: 5,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
      Date: "11/12/23",
      RefNo: "123",
      RecurringDetails: "DEMO",
      ExpensesCategory: "Test category",
      SubCategory: "test subcategory",
      Location: "ISLAMABAD",
      PaymentStatus: "PAYMENT STATUS",
      Tax: "200",
      TotalAmount: "2000",
      PaymentDue: "300",
      Expensesfor: "petrol",
      Contact: "313131331",
      ExpenseNote: "dsad",
      Addedby: "3213",
    },
    {
      id: 6,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
      Date: "11/12/23",
      RefNo: "123",
      RecurringDetails: "DEMO",
      ExpensesCategory: "Test category",
      SubCategory: "test subcategory",
      Location: "ISLAMABAD",
      PaymentStatus: "PAYMENT STATUS",
      Tax: "200",
      TotalAmount: "2000",
      PaymentDue: "300",
      Expensesfor: "petrol",
      Contact: "313131331",
      ExpenseNote: "dsad",
      Addedby: "3213",
    },
    {
      id: 7,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
      Date: "11/12/23",
      RefNo: "123",
      RecurringDetails: "DEMO",
      ExpensesCategory: "Test category",
      SubCategory: "test subcategory",
      Location: "ISLAMABAD",
      PaymentStatus: "PAYMENT STATUS",
      Tax: "200",
      TotalAmount: "2000",
      PaymentDue: "300",
      Expensesfor: "petrol",
      Contact: "313131331",
      ExpenseNote: "dsad",
      Addedby: "3213",
    },
  ];
  const printRef = useRef();
  let xlDatas = [];
  //Export to Excel
  const handleExportExcl = (userDatas) => {
    userDatas.map((xlData) => {
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
  const [col10, setCol10] = useState(true);
  const [col11, setCol11] = useState(true);
  const [col12, setCol12] = useState(true);
  const [col13, setCol13] = useState(true);
  const [col14, setCol14] = useState(true);
  const [col15, setCol15] = useState(true);

  const [isedit, setIsedit] = useState(false);
  const [isShowPayment, setIsShowPayment] = useState(false);
  const [paymentId, setPaymentId] = useState(0);
  
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
      "id",
      "Username",
      "Name",
      "Role",
      "Email",
      "Date",
      "RefNo",
      "RecurringDetails",
      "ExpensesCategory",
      "SubCategory",
      "Location",
      "PaymentStatus",
      "Tax",
      "TotalAmount",
      "PaymentDue",
      "Expensesfor",
      "Contact",
      "ExpenseNote",
      "Addedby",
    ],
    ...dummyData.map(
      ({
        id,
        Username,
        Name,
        Role,
        Email,
        Date,
        RefNo,
        RecurringDetails,
        ExpensesCategory,
        SubCategory,
        Location,
        PaymentStatus,
        Tax,
        TotalAmount,
        PaymentDue,
        Expensesfor,
        Contact,
        ExpenseNote,
        Addedby,
      }) => [
        id,
        Username,
        Name,
        Role,
        Email,
        Date,
        RefNo,
        RecurringDetails,
        ExpensesCategory,
        SubCategory,
        Location,
        PaymentStatus,
        Tax,
        TotalAmount,
        PaymentDue,
        Expensesfor,
        Contact,
        ExpenseNote,
        Addedby,
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
  const displayData = () => {
    if (showId !== 0 && isshow === true) {
      return <ViewSell id={showId} />;
    }  if (isShowPayment === true) {
      return <ViewPayment id={paymentId} />;
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
                    Action
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col2 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol2(!col2);
                    }}
                  >
                    Date
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col3 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol3(!col3);
                    }}
                  >
                    Reference No
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col4 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol4(!col4);
                    }}
                  >
                    Recurring Details
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col5 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol5(!col5);
                    }}
                  >
                    Expense Category
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col6 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol6(!col6);
                    }}
                  >
                    Sub Category
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col7 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol7(!col7);
                    }}
                  >
                    Location
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col8 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol8(!col8);
                    }}
                  >
                    Payment Status
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col9 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol9(!col9);
                    }}
                  >
                    Tax
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col10 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol10(!col10);
                    }}
                  >
                    Total Amount
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col11 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol11(!col11);
                    }}
                  >
                    Payment Due
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col12 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol12(!col12);
                    }}
                  >
                    Expense For
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col13 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol13(!col13);
                    }}
                  >
                    {" "}
                    Contact
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col14 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol14(!col14);
                    }}
                  >
                    Expense Note
                  </li>
                  <li
                    className={` w-full py-1 ${
                      col15 ? "" : "bg-blue-600"
                    } hover:bg-blue-400 `}
                    onClick={() => {
                      setCol15(!col15);
                    }}
                  >
                    Added By
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
                  Action
                </th>
              )}
              {col2 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Date
                </th>
              )}
              {col3 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Reference No.
                </th>
              )}
              {col4 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Recurring Details
                </th>
              )}
              {col5 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Expense Category
                </th>
              )}
              {col6 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Sub Category
                </th>
              )}
              {col7 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Location
                </th>
              )}
              {col8 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Payment Status
                </th>
              )}
              {col9 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Tax
                </th>
              )}
              {col10 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Total Amount
                </th>
              )}
              {col11 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Payment Due
                </th>
              )}
              {col12 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Expenses For
                </th>
              )}
              {col13 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Contact
                </th>
              )}
              {col14 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Expense Note
                </th>
              )}
              {col15 && (
                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                  Added By
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {record.map((value, index) => {
              return (
                <tr key={index} className="">
                  {col1 && (
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
                          <ul className="absolute top-5 left-10 z-20 flex flex-col items-start w-[200px] bg-white text-gray-600 shadow-xl shadow-gray-400 ">
                            
                            <li className="w-full">
                              <Link
                                to={`/home/expenses/edit/${value.id}`}
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
                            
                            <li className="w-full">
                              <Link className="flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center ">
                                <FaMoneyBillAlt size={15} />
                                <h1 className="text-sm">View Payment</h1>
                              </Link>
                            </li>
                            
                          </ul>
                        )}
                      </div>
                    </td>
                  )}
                  {col2 && (
                    <td className="px-1 py-1 text-sm">{value.Username}</td>
                  )}
                  {col3 && <td className="px-1 py-1"> {value.Name}</td>}
                  {col4 && <td className="px-1 py-1">{value.Role}</td>}
                  {col5 && <td className=" py-1 px-1">{value.Email}</td>}
                  {col6 && <td className=" py-1 px-1">{value.Role}</td>}
                  {col7 && (
                    <td className="px-1 py-1 text-sm">
                      <button
                        onClick={() => {
                          setIsCliked(true);
                          setIsShowPayment(true);
                          setPaymentId(value.id);
                        }}
                        className="bg-green-400 text-white px-2 text-xs rounded-xl"
                      >
                        status
                      </button>
                    </td>
                  )}
                  {col8 && <td className="px-1 py-1"> {value.Name}</td>}
                  {col9 && <td className="px-1 py-1">{value.Role}</td>}
                  {col10 && <td className=" py-1 px-1">{value.Email}</td>}
                  {col11 && <td className=" py-1 px-1">{value.Email}</td>}
                  {col12 && (
                    <td className="px-1 py-1 text-sm">{value.Username}</td>
                  )}
                  {col13 && <td className="px-1 py-1"> {value.Name}</td>}
                  {col14 && <td className="px-1 py-1">{value.Role}</td>}
                  {col15 && <td className=" py-1 px-1">{value.Email}</td>}
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
              Next
            </button>
          </li>
        </ul>
      </nav>
      {isCliked && (
        <div className="absolute top-0 flex flex-col items-center  justify-center right-0 bg-black/70 w-full min-h-screen">
          <div className="flex flex-col   w-full md:w-[75%]  mt-10 bg-white px-5 pt-2">
            <div className="flex items-end justify-end ">
              <MdCancel
                onClick={() => {
                  setIsCliked(!isCliked);
                  setIsedit(false);
                  setIsshow(false);
                  setShowId(0);
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

export default Expensestbl;
