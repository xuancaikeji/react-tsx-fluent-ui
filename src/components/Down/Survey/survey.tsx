import * as React from "react"
import "./survey.css"

export default class Ask extends React.Component<any,any> {
    render() {
        return (
            <div className="survey">
                <div className="surveytext">
                    <h1>用户也喜欢</h1>
                    <h2>全部显示</h2>
                </div>

                <ul className="surveylist">
                    <li><img src="/src/image/down.png" alt="" /></li>
                    <li><img src="/src/image/down.png" alt="" /></li>
                    <li><img src="/src/image/down.png" alt="" /></li>
                    <li><img src="/src/image/down.png" alt="" /></li>
                    <li><img src="/src/image/down.png" alt="" /></li>
                    <li><img src="/src/image/down.png" alt="" /></li>
                    <li><img src="/src/image/down.png" alt="" /></li>
                </ul>
                <h2>可用于</h2>
                <span> <a href="">电脑</a></span>
                <span><a href="">移动设备</a></span>
                <h2>介绍</h2>
                <p>致敬红色警戒，黑化=战巅峰巨作!</p>
                <p>   重回二战!黑暗力量冲破时空枷锁，回到1939， 妄图称霸世界!</p>
                <p>三大阵营重兵集结，未来科技助力战， 打响世界争夺战的第一 炮!
</p>
                <p>
                    万千坦克同屏对决，欧洲战场浴血再战!击败法西斯，击败黑暗势力，重新建立和平世界的新秩</p>
                <p>
                    序，谁来一同成就世界霸主梦想!</p>
                <p>=著名坦克降临=</p>
                <p>
                    天启、虎式、T-34、黑豹、格兰特、谢尔晏、潘兴，40余辆坦克集结来袭。</p>
                <p>=知名将领助战=</p>
                <p>
                    尤里、隆美尔、蒙哥马利、朱可夫、马歇尔、巴顿、麦克阿瑟，二战指挥官悉数登场</p>
                <p>=全新创新玩法=</p>
                <p>1.策略即时战争游戏，还原真实坦克攻坚战!</p>
                <p>
                    2.经典坦克收集，二 战名将供你调遣</p>
                <Chick />
            </div>
        )
    }
}

class Chick extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            show:true,
            name:"显示更多"
        }
    }
    fun = () => {
      this.setState(function(show,name){
          if(show.show==true){
      return {show:false,name:"显示更少"}
    }else if(show.show == false){
        return{show:true,name:"显示更多"}
    }
      })
    }
   
    render() {
        return (
            <div>
                <div >{this.state.show==true?"": <div><p> 3.坦克集群，指挥官视角统御部队</p> 
                <p>4.即时作战，是男人就该硬碰硬</p> <p>5.防守不如进攻，逆塔防攻坚唤醒狼性</p>

<p>6.全局战略部署,挥斥方道统一欧洲</p>
                </div> }
            


                    </div>

                <button onClick={this.fun}>{this.state.name}</button>
            </div>
        )
    }
}
