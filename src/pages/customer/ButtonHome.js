import React, { memo } from "react";

const ButtonHome = memo(function ({ icon, nameButton }) {
    return (
        <div style={profilearea5} className="btn">
            <table>
                <tr>
                    <td>
                        <img src={icon} style={profpic1} />
                    </td>
                    <td>
                        <a href="#">  {nameButton}</a>
                    </td>
                </tr>
            </table>
        </div>
    );
});
export const profilearea5 = {
    alignItems: 'center',
    fontSize: '15px',
    fontWeight: '550',
    fontFamily: 'inherit',
}
export const profpic1 = {
    height: '30px',
    borderRadius: '10px/10px',
}

export default ButtonHome;