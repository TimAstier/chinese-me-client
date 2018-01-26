import pinyin from 'chinese-to-pinyin';
import pinyinize from 'pinyinize';

const chineseToPinyin = chinese => {
  return pinyinize( // wo3 => wǒ
    pinyin( // 法国 => 'fa3 guo3'
      chinese,
      { numberTone: true }
    )
  );
};

export default chineseToPinyin;
