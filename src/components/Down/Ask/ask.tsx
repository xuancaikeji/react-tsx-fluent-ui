import * as React from "react"
import "./ask.css"
export default class Ask extends React.Component{
    render(){
        return(
            <div className="ask"> 
                   <h1>此产品应该可以再此设备上运行</h1>
                   <h2>请检查最低要求以进行确认。若要获得最佳体验，你的设备应该满足推进啊要求。</h2>
                   <div className="asklist">
                       <div className="askone">
                           <h3>最低</h3>
                           <p>你的设备必须满足所有最低要求才能运行此产品</p>
                       </div>
                       <div className="asktwo">
                           <h4>操作系统</h4>
                           <p>Windows 10版本10240.0或更高版本
</p>
                       </div>
                       <div className="asktwo">
                           <h4>体系结构</h4>
                           <p>x86</p>
                       </div>
                       <div className="askright">

                      
                       <div className="askone">
                           <h3>推荐要求</h3>
                           <p>若要获得最佳体验，你的设备必须满足这些要求</p>
                       </div>
                       <div className="asktwo">
                           <h4>操作系统</h4>
                           <p>Windows 10版本10240.0或更高版本
</p>
                       </div>
                       <div className="asktwo">
                           <h4>体系结构</h4>
                           <p>x86</p>
                           </div>
                   </div>
            </div>
            </div>
        )
    }
}