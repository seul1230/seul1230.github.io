const COPY_TEXT_CHANGE_OFFSET = 1000;
const COPY_BUTTON_TEXT_BEFORE = 'Copy';
const COPY_BUTTON_TEXT_AFTER = 'Copied';
const COPY_ERROR_MESSAGE = '코드를 복사할 수 없습니다. 다시 시도해 주세요.';

// const language = document.querySelectorAll('div.highlighter-rouge').
console.log($("#highlighter-rouge div")); 
const codeBlocks = document.querySelectorAll('div.highlighter-rouge > div'); // pre > code


const copyBlockCode = async (target = null) => {
  if (!target) return;
  try {
    const code = decodeURI(target.dataset.code);

    await navigator.clipboard.writeText(code);
    target.textContent = COPY_BUTTON_TEXT_AFTER;
    setTimeout(() => {
      target.textContent = COPY_BUTTON_TEXT_BEFORE;
    }, COPY_TEXT_CHANGE_OFFSET);
  } catch(error) {
    alert(COPY_ERROR_MESSAGE);
    console.error(error);
  }
}

for (const codeBlock of codeBlocks) {

  // 언어 클래스 추출: 바깥 highlighter-rouge div에서 language-xxx 찾기
  const outerBlock = codeBlock.closest('div.highlighter-rouge');
  const langClass = outerBlock
    ? [...outerBlock.classList].find(c => c.startsWith('language-'))
    : null;

  const baseLanguage = langClass ? langClass.replace('language-', '') : 'text';
  const language = baseLanguage.charAt(0).toUpperCase() + baseLanguage.slice(1);
  console.log("lang:", language);

  const codes = codeBlock.innerHTML.match(/(.*)(\n|.*$)/g);
  const codesHead = codes[0].split('<code>')

  const processedCodes = codesHead[0] + `<code>` + [codesHead[1]].concat(codes.slice(1,-2)).reduce((prevCodes, curCode) => prevCodes + 
`<span class="line">${curCode}</span>`, '') + `</code>`;
console.log(processedCodes);
  
  const copyButton = `<button type="button" class="copy-btn" 
data-code="${encodeURI(codeBlock.textContent)}" 
onclick="copyBlockCode(this)">${COPY_BUTTON_TEXT_BEFORE}</button>`;
  
  const codeBody = `
  <div class="code-body">${processedCodes}</div>
  `;
  
  const codeHeader = `
  <div class="code-header">
    <span class="red btn"></span>
    <span class="yellow btn"></span>
    <span class="green btn"></span>
    <span class="code-lang">${language}</span>
    ${copyButton}
  </div>`;
  
  codeBlock.innerHTML = codeHeader + codeBody;
}




