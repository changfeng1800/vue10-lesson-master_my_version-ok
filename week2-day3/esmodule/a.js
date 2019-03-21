

export let str = '我很帅';
export let str2 = '我很英俊';
// 会将str和str2放到一个对象内导出 {str:'我很帅',str2:'我很英俊'}
/* export function a(){     ////导出函数写法1
    alert(2)
} */
export let a = ()=>{    ////导出函数写法2
    alert(1)
};

