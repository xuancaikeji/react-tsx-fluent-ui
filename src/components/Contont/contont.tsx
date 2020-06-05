
import * as React from 'react';
 import "./contont.css"
import { useId, useBoolean } from '@uifabric/react-hooks';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  ContextualMenu,
  Toggle,
  DefaultButton,
  Modal,
  IDragOptions,
  IconButton,

} from 'office-ui-fabric-react';

const dragOptions: IDragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
};


export  const Contont: React.FunctionComponent = () => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);

  // Use useId() to ensure that the IDs are unique on the page.
  // (It's also okay to use plain strings and manually ensure uniqueness.)
  const titleId = useId('title');

  return (
    <div>
     
      <DefaultButton onClick={showModal} text="更多" />
      <Modal
        titleAriaId={titleId}
        isOpen={isModalOpen}
        onDismiss={hideModal}
        isBlocking={false}
        containerClassName={contentStyles.container}
        dragOptions={isDraggable ? dragOptions : undefined}
      >
        <div className={contentStyles.header}>
          <span id={titleId}>闪电突袭:红警围城
</span>
        
          
        </div>
        <div className={contentStyles.body}>
          <p>
          致敬红色警戒，黑化二战巅峰巨作! 
重回战!黑暗力量冲破时空枷锁，回到1939， 妄图称霸世界! 
三大阵营重兵集结，未来科技助力二战，打响世界争夺战的第一炮!
万千坦克同屏对决，欧洲战场浴血再战!击败法西斯，击败黑暗势力，重新建
和平世界的新秩序，谁来一同成就世界霸主梦想!

          </p>
          <p>
          =著名坦克降临=
天启、虎式、T-34、 黑豹、格兰特、谢尔曼、潘兴，40余辆坦克集结来袭。

          </p>
          <p>
          =知名将领助战=
尤里、隆美尔、蒙哥马利、朱可夫、马歇尔、巴顿、麦克阿瑟，二战指挥官悉
登场

          </p>
          <p>
          =全新创新玩法=
          </p>
          <p>1.策略即时战争游戏，还原真实坦克攻坚战!</p>
          <p>2.经典坦克收集，二战名将供你调遣</p>
          <p>3.坦克集群，指挥言视角统御部队</p>
          <p>4.即时作战，是男人就该硬碰硬</p>
          <p>5.防守不如进攻，逆塔防攻坚唤醒狼性</p>
          <p>
6.全局战略部署，挥斥方道统-欧洲</p>
        
        </div>
        <button  onClick={hideModal} className="button">关闭</button>
      </Modal>
    </div>
  );
};

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
    // tslint:disable-next-line:deprecation
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});
const toggleStyles = { root: { marginBottom: '20px' } };


