import React from 'react';

const IconNews = {
    width: '35px',
    height: '35px',
    borderRadius: '25px',
}
const textNews = {
    fontSize: '15px',
    width: '400px',
    height: '20px',
    background: '#3a3b3c',
    padding: '5px',
    outline: 'none',
    outlineWidth: '0',
    borderRadius: '20px/20px',
    backgroundPosition: '5px',
    backgroundRepeat: 'no-repeat',
    color: 'white',
}
function News(props) {
    return (
        <div>
            <div className="room1">
                <div>
                    <table>
                        <tr>
                            <td>
                                <img src={props.Icon} style={IconNews} />
                            </td>
                            <td>
                                {props.Name}
                            </td>
                        </tr>
                    </table>
                </div>
                <img src={props.Image} height="400" width="500" /><br />
                <p6>Like  Comment  Share</p6>
                <br />
                <div>
                    <table>
                        <tr>
                            <td>
                                <img src={props.Icon} style={IconNews} />
                            </td>
                            <td>
                                <input type="textarea" placeholder="comment" style={textNews} />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default News;