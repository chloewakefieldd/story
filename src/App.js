import { useEffect } from 'react';
import Timeline from './components/Timeline/Timeline';
import Character from './components/Character/Character';
import Event from './components/Event/Event';
import './App.css';

const App = () => {

  function adjustCharacterLabelElements() {
    const characterLabels = Array.from(document.getElementsByClassName("characterlabel"));
    const characterTimelines = Array.from(document.getElementsByClassName("character"));
    const windowWidth = window.innerWidth;

    characterTimelines.forEach((characterTimeline, index) => {
      const characterTimelineRect = characterTimeline.getBoundingClientRect();
      const characterLabel = characterLabels[index];
      const characterLabelRect = characterLabel.getBoundingClientRect();
      const marginLeft = parseFloat(characterTimeline.style.marginLeft);
      const labelWidth = characterLabelRect.width;

      if (characterTimelineRect.right > 0 && characterTimelineRect.left < windowWidth) {
        characterLabel.style.opacity = 1;

        let transformValue = marginLeft;

        if (characterTimelineRect.right < windowWidth) {
          if (characterTimelineRect.right > windowWidth / 2 + 15) {
            if (characterTimelineRect.left > windowWidth / 2 - 85) {
              transformValue += 85 - labelWidth / 2;
              characterLabel.style.backgroundColor = 'rgb(40,40,40)';
            } else {
              transformValue += windowWidth / 2 - characterTimelineRect.left - labelWidth / 2;
              characterLabel.style.backgroundColor = 'rgb(46, 87, 34)';
            }
          } else {
            transformValue += characterTimelineRect.width - labelWidth;
            characterLabel.style.backgroundColor = 'rgb(82,26,22)';
          }
        } else if (characterTimelineRect.left > 0) {
          if (characterTimelineRect.left > windowWidth / 2 - 85) {
            transformValue += 85 - labelWidth / 2;
            characterLabel.style.backgroundColor = 'rgb(40,40,40)';
          } else {
            transformValue += windowWidth / 2 - characterTimelineRect.left - labelWidth / 2;
            characterLabel.style.backgroundColor = 'rgb(46, 87, 34)';
          }
        } else {
          transformValue += windowWidth / 2 - characterTimelineRect.left - labelWidth / 2;
        }

        characterLabel.style.transform = `translateX(${transformValue}px)`;
      } else if (characterTimelineRect.right <= 0 && characterTimelineRect.left < 0) {
        characterLabel.style.transform = `translateX(${marginLeft + characterTimelineRect.width - labelWidth}px)`;
      } else {
        characterLabel.style.opacity = 0;
        characterLabel.style.transform = `translateX(${marginLeft}px)`;
      }
    });
  }

  useEffect(() => {
    setInterval(adjustCharacterLabelElements, 16);
    const line = document.getElementById('line');
    let currentX = 0;

    function updateLinePosition() {
      currentX = window.scrollX + window.innerWidth / 2
      if (currentX < 114.5) {
        currentX = 114.5;
      }
      line.style.transform = `translateX(${currentX}px)`;
      line.style.zIndex = -1;

      requestAnimationFrame(updateLinePosition);
    }

    updateLinePosition();

    const numberOfCharacters = document.getElementsByClassName('character').length;
    const heightOfElements = 200 + numberOfCharacters * 59;

    const labelsExceptFirst = document.querySelectorAll('.timeline .label:not(:first-child)');
    const events = document.querySelectorAll('.Event');

    labelsExceptFirst.forEach(label => {
      label.style.height = `${heightOfElements}px`;
    });
    events.forEach(event => {
      event.style.height = `${heightOfElements-24}px`;
    });
    line.style.height = `${50 + heightOfElements}px`;


  }, []);

  return (
    <div className="App">
      <div className="line" id="line"></div>
      <Timeline label={'Timeline'} startYear={738} maxYear={300} />
      <div className="characterContainer">
        <Character name='Aesig' birthYear={738} ageAtDeath={89} />
        <Character name='Alstred' birthYear={758} ageAtDeath={75} />
        <Character name='Alfast' birthYear={783} ageAtDeath={53} />
        <Character name='Eòrion' birthYear={789} ageAtDeath={46} />
        <Character name='Orhen' birthYear={771} ageAtDeath={65} />
        <Character name='Roesin' birthYear={778} ageAtDeath={23} ilyysen/>
        <Character name='Elarien' birthYear={781} ageAtDeath={56} />
        <Character name='Aeson' birthYear={801} ageAtDeath={31} ilyysen />
        <Character name='Dagaelin' birthYear={803} ageAtDeath={51} />
        <Character name='Morrei' birthYear={811} ageAtDeath={90} />
        <Character name='Alrek' birthYear={830} ageAtDeath={2} ilyysen />
        <Character name='Taesund' birthYear={831} ageAtDeath={90} />
        <Character name='Balastag' birthYear={800} ageAtDeath={90} />
        <Character name='Rosteon' birthYear={821} ageAtDeath={90} />
        <Character name='Ramaeris' birthYear={806} ageAtDeath={36} ilyysen />
        <Character name='Ramaurek' birthYear={829} ageAtDeath={90} ilyysen />
        <Character name='Tuleg' birthYear={830} ageAtDeath={12} />
        <Character name='Borthan' birthYear={808} ageAtDeath={90} ilyysen />
        <Character name='Mornaith' birthYear={782} ageAtDeath={68} ilyysen />
        <Character name='Meratel' birthYear={834} ageAtDeath={90} ilyysen />
        <Character name='Lianen' birthYear={830} ageAtDeath={90} ilyysen />
        <Character name='Kùrim' birthYear={831} ageAtDeath={90} ilyysen />
      </div>
      <Event year={799} label='Orhen marries Roesin' />
      <Event year={802} label='Orhen marries Elarien' />
      <Event year={807} label='Alstred conquers Essera' />
      <Event year={810} label='Tzul Aesig invades Essera' />
      <Event year={812} label='Mek-Nàren founded' />
      <Event year={827} label='End of petty wars as Tzul Ohren takes over' />
      <Event year={828} label='Mek-Nàren recognised as legit kingdom' />
      <Event year={829} label='Knur Aeson marries princess Morrei' />
      <Event year={832} label='Mek-Náren cut off' />
      <Event year={834} label='Faraden and Kasweth created' />
      <Event year={835} label='Great plague starts' />
      <Event year={836} label='Balastag Rosteon and Dagaelin take over' />
      <Event year={837} label='Plague ends' />
      <Event year={838} label='Coop attempt on Balastag' />
      <Event year={842} label='Ramaurek brought to Elvyssa' />
      <Event year={850} label='Ramaurek flees Elvyssa' />
      <Event year={851} label='Ramaurek founds NAME. Borthan goes to Faraden becoming Ankarsen' />
      <Event year={852} label='Ramaurek goes to Mek-Nàren. Dagaelin turned' />
      <Event year={853} label='Ramaurek starts sub-verting power' />
      <Event year={854} label='Dagaelin tries to assasinate Ramaurek. Ramaurek usurps Mek-Nàren throne. Starts war' />
    </div>
  );
}

export default App;
