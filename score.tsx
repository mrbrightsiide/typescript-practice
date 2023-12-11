const [totalScore, setTotalScore] = useState<any[]>([]);

useEffect(() => {
  const total = [];
  for (let i = 1; i < 7; i++) {
    const s = document.querySelectorAll(`.score_${i}`);
    const scores = [];
    s.forEach((element) => {
      scores.push(parseInt(element.innerHTML));
    });
    total.push(scores.reduce((acc, cur) => acc + cur, 0));
  }
  setTotalScore(total);
}, [document]);

<table>
  <thead>
    <th>과목명</th>
    <th>형성평가</th>
    <th>중간</th>
    <th>기말</th>
    <th>총점</th>
  </thead>
  <tbody>
    <tr>
      <td>대학영어</td>
      <td className='score_1'>20</td>
      <td className='score_1'>30</td>
      <td className='score_1'>46</td>
      <td>{totalScore[0]}</td>
    </tr>
    <tr>
      <td>jsp</td>
      <td className='score_2'>20</td>
      <td className='score_2'>20</td>
      <td className='score_2'>36</td>
      <td>{totalScore[1]}</td>
    </tr>
    <tr>
      <td>드라마와 영어듣기</td>
      <td className='score_3'>20</td>
      <td className='score_3'>28</td>
      <td className='score_3'>42</td>
      <td>{totalScore[2]}</td>
    </tr>
    <tr>
      <td>영어회화2</td>
      <td className='score_4'>20</td>
      <td className='score_4'>26</td>
      <td className='score_4'>44</td>
      <td>{totalScore[3]}</td>
    </tr>
    <tr>
      <td>유닉스</td>
      <td className='score_5'>20</td>
      <td className='score_5'>30</td>
      <td className='score_5'>32</td>
      <td>{totalScore[4]}</td>
    </tr>
    <tr>
      <td>심리학</td>
      <td className='score_6'>20</td>
      <td className='score_6'>30</td>
      <td className='score_6'>0</td>
      <td>{totalScore[5]}</td>
    </tr>
    <tr>
      <td>평균</td>
      <td>{Math.round(totalScore.reduce((acc, cur) => acc + cur, 0) / 6)}</td>
    </tr>
  </tbody>
</table>;
