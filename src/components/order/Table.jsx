import { MdTableBar } from "react-icons/md";


const Table = ({booked}) => {
  const {email} = booked;
  return (
    <div className="">
      <table className="table">
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div >
                  <MdTableBar className=" h-12 w-12" />
                  </div>
                </div>
                <div className="flex justify-between w-full items-center"> 
                  <h3 className="text-sm ">{email}</h3>
                </div>
              </div>
            </td>
            <th className="text-right">
              <button className="btn btn-ghost btn-xs">Details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;