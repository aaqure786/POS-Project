import React, { useRef, useState } from "react";
import { FaCalendar, FaInfoCircle, FaMoneyBillAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { AiTwotoneFolderOpen } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import AddProduct from "../Product/AddorEditProduct";
import AddorEditContact from "../contacts/AddorEditContact";
import ImportProduct from "../Product/ImportProduct";

const ExpenseAdd = () => {
  const dummyData = [
    {
      id: 1,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com",
    },
    {
      id: 2,
      Username: "username1",
      Name: "User1",
      Role: "Admin",
      Email: "username@gmail.com",
    },
    {
      id: 3,
      Username: "username2",
      Name: "User2",
      Role: "Admin",
      Email: "username2@gmail.com",
    },
    {
      id: 4,
      Username: "username3",
      Name: "User3",
      Role: "Admin",
      Email: "username3@gmail.com",
    },
    {
      id: 5,
      Username: "username4",
      Name: "User4",
      Role: "Admin",
      Email: "username4@gmail.com",
    },
    {
      id: 6,
      Username: "username5",
      Name: "User5",
      Role: "Admin",
      Email: "username5@gmail.com",
    },
    {
      id: 7,
      Username: "username6",
      Name: "User6",
      Role: "Admin",
      Email: "username6@gmail.com",
    },
  ];

  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);

  const [isAddSupplier, setIsAddSupplier] = useState(false);

  const [isRefund, setIsRefund] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [formData, setFormData] = useState({
    customer: "",
    invoiceNo: "",
    salesDate: "",
    status: "",
    invoiceSchema: "",
    sellingPrice: "",
    tables: "",
    serviceStaff: "",
    businesLocation: "",
    inputData: [],
    payTerm: "",
    payTerm1: "",
    discountType: "",
    discountAmount: 0,
    redeemed: "",
    available: "",
    redeemedAmount: "",
    discount: 0,
    orderTaxType: "",
    orderTax: 0,
    sellNotes: "",
    shippingDetails: "",
    shippingAddress: "",
    shippingCharges: 0,
    shippingStatus: "",
    deliveredTo: "",
    additionalExpenseName: "",
    additionalExpenseAmount: 0,
    additionalExpenseName1: "",
    additionalExpenseAmount1: 0,
    additionalExpenseName2: "",
    additionalExpenseAmount2: 0,
    additionalExpenseName3: "",
    additionalExpenseAmount3: 0,
    amount: "",
    paymentDate: "",
    paymentMethod: "",
    paymentAccount: "",
    paymentNote: "",
    expenseType: "",
    subCategory: "",
    RefNo: "",
    ExpensesFor: "",
    ExpensesForContact: "",
    ApplicationTax: "",
    TotalAmount: "",
    ExpenseNote: "",
    recurringinterval1: "",
    recurringinterval2: "",
    Repetition: "",
  });
  const params = useParams();
  const id = params.id;

  // const findTotal = () => {
  //   let total = 0;
  //   formData.inputData.map((val) => {
  //     return (total += val.lineTotal);
  //   });
  //   return total;
  // };

  const [isserror, setIsserror] = useState(false);
  const handleClick = (e) => {
    if (
      formData.customer.length === 0 ||
      formData.salesDate.length === 0 ||
      formData.status.length === 0 ||
      formData.discountType.length === 0 ||
      formData.discountAmount.length === 0 ||
      formData.orderTaxType.length === 0 ||
      formData.amount.length === 0 ||
      formData.paymentDate.length === 0 ||
      formData.paymentMethod.length === 0
    ) {
      setIsserror(true);
      console.log(isserror);
    } else if (id) {
      console.log("Handle Update", formData);
    } else {
      console.log("Handle Save", formData);
    }
  };
  const inpuRef = useRef();

  const [isCliked, setIsCliked] = useState(false);
  const [newProduct, setNewProduct] = useState(false);
  const [isProductUpload, setIsProductUpload] = useState(false);
  const displayData = () => {
    if (newProduct === true) {
      return <AddProduct />;
    } else if (isProductUpload === true) {
      return <ImportProduct />;
    } else if (isAddSupplier === true) { 
      return <AddorEditContact id={0} />;
    }
  };

  return (
    <div className="w-full p-5 bg-gray-100">
      <h1 className="text-xl text-start font-bold ">{id ? "Edit" : "Add"} Expense</h1>

      <div className="flex w-full  min-h-[300px] flex-col p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          <div>
            <h2 className="text-start">
              <b>Business Location:</b>
            </h2>
            <select
              value={formData.businesLocation}
              onChange={(e) => {
                setFormData({ ...formData, businesLocation: e.target.value });
              }}
              type="text"
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
            >
              <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>
                Eziline Software House (Pvt.) Ltd (BL0001)
              </option>
            </select>
          </div>
          <div>
            <h2 className="text-start">
              <b>Expense category:</b>
            </h2>
            <select
              value={formData.expenseType}
              onChange={(e) => {
                setFormData({ ...formData, expenseType: e.target.value });
              }}
              type="text"
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
            >
              <option value={""}>Please Select</option>
              <option value={"Test"}>Test</option>
              <option value={"Fuel Expenses"}>Fuel Expenses</option>
            </select>
          </div>
          <div>
            <h2 className="text-start">
              <b>Sub category:</b>
            </h2>
            <select
              value={formData.subCategory}
              onChange={(e) => {
                setFormData({ ...formData, subCategory: e.target.value });
              }}
              type="text"
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
            >
              <option value={""}>Please Select</option>
            </select>
          </div>
          <div className="flex flex-col">
            <h1 className="flex text-sm text-start font-bold">Reference No:</h1>
            <input
              value={formData.invoiceNo}
              onChange={(e) => {
                setFormData({ ...formData, invoiceNo: e.target.value });
              }}
              type="Text"
              placeholder="Reference No"
              className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
            />
            <h1 className="flex text-sm text-start ">
              Keep Blank to autogenerate
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <div className="flex flex-col">
            <div className="flex text-sm text-start font-bold">
              <h1>Date:*</h1>
              <h2 className="text-red-400">
                {isserror && formData.salesDate.length === 0
                  ? "Required field"
                  : ""}
              </h2>
            </div>
            <div className="flex">
              <FaCalendar
                size={15}
                className="w-8 h-8 p-2 border-[1px] border-gray-600"
              />

              <input
                value={formData.salesDate}
                onChange={(e) => {
                  setFormData({ ...formData, salesDate: e.target.value });
                }}
                type="Date"
                placeholder="Select Date Time"
                className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex mx-2">
              <div className="text-start ">
                <h1>
                  <b>Expenses for:*</b>
                </h1>
                <h2 className="text-red-400">
                  {isserror && formData.ExpensesFor.length === 0
                    ? "Required field"
                    : ""}
                </h2>
              </div>
            </div>
            <select
              value={formData.ExpensesFor}
              onChange={(e) => {
                setFormData({ ...formData, ExpensesFor: e.target.value });
              }}
              type="text"
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
            >
              {dummyData.map((data) => (
                <option key={data.Username} value={data.Username}>
                  {data.Username}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col ">
            <div className="flex mx-2">
              <div className="text-start ">
                <h1>
                  <b>Expenses for Contact:*</b>
                </h1>
                <h2 className="text-red-400">
                  {isserror && formData.ExpensesForContact.length === 0
                    ? "Required field"
                    : ""}
                </h2>
              </div>
            </div>
            <select
              value={formData.ExpensesForContact}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  ExpensesForContact: e.target.value,
                });
              }}
              type="text"
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
            >
              {dummyData.map((data) => (
                <option key={data.Name} value={data.Name}>
                  {data.Name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <div className=" flex flex-col ">
            <h2 className="text-start font-bold "> Attatch Document:</h2>
            <div className="flex">
              {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
              <input
                type="text"
                className="px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]"
              />
              <input
                className="px-3   focus:outline-none w-[60%] hidden"
                type="file"
                ref={inpuRef}
                accept="application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png"
              />
              <div
                onClick={() => {
                  inpuRef.current?.click();
                }}
                className="flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center"
              >
                <AiTwotoneFolderOpen size={32} />
                Browse
              </div>
            </div>
            <p className="text-start  flex ">
              Max File size: 5MB:
              <br />
              Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex mx-2">
              <h1 className="text-start font-bold">Application Tax:*</h1>
            </div>
            <select
              value={formData.ApplicationTax}
              onChange={(e) => {
                setFormData({ ...formData, ApplicationTax: e.target.value });
              }}
              type="text"
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
            >
              <option value={""}>None</option>
              <option value={"sss"}>sss</option>
              <option value={"Test tax"}>Test tax</option>
              <option value={"pepsi"}>pepsi</option>
            </select>
          </div>
          <div className="flex flex-col">
            <h1 className="flex text-sm text-start font-bold">Total Amount:</h1>
            <input
              value={formData.TotalAmount}
              onChange={(e) => {
                setFormData({ ...formData, TotalAmount: e.target.value });
              }}
              type="Text"
              placeholder="Total Amount"
              className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
          <div className="flex flex-col">
            <h1 className="flex text-sm text-start font-bold">Expense Note:</h1>
            <textarea
              value={formData.ExpenseNote}
              onChange={(e) => {
                setFormData({ ...formData, ExpenseNote: e.target.value });
              }}
              type="Text"
              placeholder="Expense Note"
              className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
            />
          </div>
          <div className="flex">
            <label>
              <input
                className={`input-icheck icheckbox_square-blue ${
                  isRefund ? "checked" : ""
                }`}
                type="checkbox"
                id="is_refund"
                name="is_refund"
                value="1"
                checked={isRefund}
                onChange={() => setIsRefund(!isRefund)}
              />
              Is refund?
            </label>

            <FaInfoCircle
              onMouseOver={() => {
                setInfo1(true);
              }}
              onMouseLeave={() => {
                setInfo1(false);
              }}
              size={15}
              style={{ color: "skyblue" }}
              className="mx-1 mt-1 cursor-help"
            />
            {info1 && (
              <div className="flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute  p-2 z-10 bg-white shadow-md shadow-gray-300 mx-5 my-5">
                <p className="text-start mt-2 text-gray-800">
                  If checked expenses will be refunded and added to net profit
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isRefund && (
        <div className="flex w-full  min-h-[150px] flex-col p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600">
          <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-4">
            <div className="flex">
              <label>
                <input
                  className={`input-icheck icheckbox_square-blue min-h-[20px] relative ${
                    isRecurring ? "checked" : ""
                  }`}
                  type="checkbox"
                  id="is_recurring"
                  name="is_recurring"
                  value="1"
                  checked={isRecurring}
                  onChange={() => setIsRecurring(!isRecurring)}
                />
                Is recurring?
              </label>

              <FaInfoCircle
                onMouseOver={() => {
                  setInfo2(true);
                }}
                onMouseLeave={() => {
                  setInfo2(false);
                }}
                size={15}
                style={{ color: "skyblue" }}
                className="mx-1 mt-1 cursor-help"
              />
              {info2 && (
                <div className="flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute  p-2 z-10 bg-white shadow-md shadow-gray-300 mx-5 my-5">
                  <p className="text-start mt-2 text-gray-800">
                    If checked this expense will be automatically generated at
                    regular intervals
                  </p>
                </div>
              )}
            </div>
            <div class="form-group text-start">
              <label for="recur_interval">
                <b>Recurring interval:*</b>
              </label>
              <div class="input-group">
                <input
                  className="form-control border border-black"
                  name="recur_interval"
                  type="number"
                  id="recur_interval"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      recurringinterval1: e.target.value,
                    });
                  }}
                />

                <select
                  className="form-control  border border-black"
                  id="recur_interval_type"
                  name="recur_interval_type"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      recurringinterval2: e.target.value,
                    });
                  }}
                >
                  <option value="days" selected="selected">
                    Days
                  </option>
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="flex text-sm text-start font-bold">
                No. of Repetitions:
              </h1>
              <input
                value={formData.Repetition}
                onChange={(e) => {
                  setFormData({ ...formData, Repetition: e.target.value });
                }}
                type="Text"
                placeholder="No. of Repetitions"
                className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
              />
              <h1 className="flex text-sm text-start ">
                if Black will be generated infinite times
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600">
        <h1 className="flex text-sm text-start font-bold mb-5">Add Payment</h1>

        <h1 className="flex text-sm text-start font-bold">
          Advance Balance: <p className="mx-2"> 0</p>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col ">
            <div className="flex text-sm text-start font-bold">
              <h1>Amount:*</h1>
              <h2 className="text-red-400">
                {isserror && formData.amount.length === 0
                  ? "Required field"
                  : ""}
              </h2>
            </div>
            <div className="flex">
              <FaMoneyBillAlt
                size={15}
                className="w-8 h-8 p-2 border-[1px] border-gray-600"
              />

              <input
                value={formData.amount}
                onChange={(e) => {
                  setFormData({ ...formData, amount: e.target.value });
                }}
                type="number"
                placeholder="Amount"
                className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex text-sm text-start font-bold">
              <h1>Paid On :*</h1>
              <h2 className="text-red-400">
                {isserror && formData.paymentDate.length === 0
                  ? "Required field"
                  : ""}
              </h2>
            </div>
            <div className="flex">
              <FaCalendar
                size={15}
                className="w-8 h-8 p-2 border-[1px] border-gray-600"
              />

              <input
                value={formData.paymentDate}
                onChange={(e) => {
                  setFormData({ ...formData, paymentDate: e.target.value });
                }}
                type="Date"
                placeholder="Select Date Time"
                className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex text-sm text-start font-bold">
              <h1>Payment method:*</h1>
              <h2 className="text-red-400">
                {isserror && formData.paymentMethod.length === 0
                  ? "Required field"
                  : ""}
              </h2>
            </div>
            <div className="flex">
              <FaMoneyBillAlt
                size={15}
                className="w-8 h-8 p-2 border-[1px] border-gray-600"
              />
              <select
                value={formData.paymentMethod}
                onChange={(e) => {
                  setFormData({ ...formData, paymentMethod: e.target.value });
                }}
                type="text"
                className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
              >
                <option value={""}>Please Selecet</option>
                <option value={"Advance"}>Advance</option>
                <option value={"Cash"}>Cash</option>
                <option value={"Card"}>Card</option>
                <option value={"Checque"}>Checque</option>
                <option value={"Bank Transfer"}>Bank Transfer</option>
                <option value={"Other"}>Other</option>
                <option value={"Easypais"}>Easypais</option>
                <option value={"Custom Payment 6"}>Custom Payment 6</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex text-sm text-start font-bold">
              <h1>Payment Account:*</h1>
              <h2 className="text-red-400">
                {isserror && formData.paymentAccount.length === 0
                  ? "Required field"
                  : ""}
              </h2>
            </div>
            <div className="flex">
              <FaMoneyBillAlt
                size={15}
                className="w-8 h-8 p-2 border-[1px] border-gray-600"
              />
              <select
                value={formData.paymentAccount}
                onChange={(e) => {
                  setFormData({ ...formData, paymentAccount: e.target.value });
                }}
                type="text"
                className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none"
              >
                <option value={""}>None</option>
                <option value={"Test Account"}>Test Account</option>
                <option value={"Askari Bank"}>Askari Bank</option>
                <option value={"asd"}>asd</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-3">
          <h1 className="flex text-sm  font-bold">Payment Note:</h1>

          <textarea
            rows={4}
            value={formData.paymentNote}
            onChange={(e) => {
              setFormData({ ...formData, paymentNote: e.target.value });
            }}
            className="px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none"
          />
        </div>

        <div className="w-full h-[1px] bg-black my-5"></div>

        <div className="flex items-end justify-end mt-5">
          <div className="flex ">
            <h1 className="font-bold mx-2">Payment Due:</h1>
            <h1 className=" mx-2">Rs 0.00</h1>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end mt-5">
        <button
          onClick={handleClick}
          className="bg-green-500 px-2 py-2 items-center justify-center flex"
        >
          {id ? "Update" : "Save"}
        </button>
      </div>
      {isCliked && (
        <div className="absolute top-0 flex flex-col items-center  justify-center right-0 bg-black/70 w-full min-h-screen">
          <div className="w-full md:w-[70%]">
            <div
              onClick={() => {
                setIsCliked(false);
                setIsAddSupplier(false);
                setNewProduct(false);
                setIsProductUpload(false);
              }}
              className=" flex items-end justify-end  w-full mt-10 bg-white px-5 pt-2"
            >
              <MdCancel size={20} />
            </div>
            {displayData()}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseAdd;
