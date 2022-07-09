# 개념정리
- Props : (방식) 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법

- useEffect(() => {}, [dependency]) : dependency를 입력하면 state를 확인하면서 state가 변할때 마다 실행. dependency를 []빈 칸으로 두는 경우에는 더 이상 React.js 가 지켜볼 게 없어서 한 번만 실행

- cleanup function : component가 destroy될 때 뭔가 할 수 있도록 해주는 것. / 사용 빈도는 많지는 않음.

```
function Hello() {
  //방법1
  useEffect(() => {
    console.log("created :)")
    return () => console.log("destoryed :(") 
    //  
  }, [])

  //방법2
  useEffect(function () {
    console.log("hi")
    return function () {
      console.log("bye")
    }
  }, [])
  return <h1>Hello</h1>
}
```

- 기존 배열에 새로운 값 추가 : [새로운 값, ...기존 배열 명]
```(currentArray) => [toDo, ...currentArray])```

- map() : 하나의 array에 있는 item을 내가 원하는 무엇이든지를 바꿔주는 역할을 함. 
```
["there", "are", "you", "hello"].map((item) => item.toUpperCase())

// 결과
['THERE', 'ARE', 'YOU', 'HELLO']
```
