import React, { useState } from 'react';

const topics = [
  "Voorspelbaarheid en grenzen",
  "Structuur",
  "Nabijheid van kinderen",
  "Nabijheid van professional",
  "Aandacht",
  "Positieve communicatie, bekrachtiging en waardering",
  "Uitdaging en stimuleren van de ontwikkeling",
  "Ruimte voor fysiek spel en beweging",
  "Autonomie en zelfstandigheid",
  "Ondersteuning in communicatie"
];

const scaleOptions = ["Weinig", "Minder", "Neutraal", "Meer", "Veel"];

const adviezen = {
  "Voorspelbaarheid en grenzen": {
    Weinig: "Er zijn regels op de groep.\nEr zijn consequenties voor het niet nakomen van de regels.\nHet kind start in dezelfde groep.\nKan gedurende de dag wisselen tussen groepen.",
    Minder: "Duidelijke regels (visueel gemaakt, die hangen op de groep).\nEr zijn consequenties voor het niet nakomen van de regels.\nHet kind zit in een vaste groep, met dagelijks (grotendeels) dezelfde kinderen.\nEr kunnen 'speelafspraakjes' op andere groepen zijn.",
    Neutraal: "Duidelijke regels (visueel gemaakt, die hangen op de groep).\nVerwachtingen worden vooraf aan de activiteit benoemd (pre-teaching).\nAls een regel wordt overtreden dan volgt hier dezelfde consequentie op.\nHet kind zit in een vaste groep, met dagelijks (grotendeels) dezelfde kinderen.\nOvergangen worden geïntroduceerd (met een liedje).",
    Meer: "Duidelijke regels (actief visueel aanbieden).\nOok bij niet nakomen van de regel.\nVerwachtingen worden vooraf aan de activiteit benoemd (pre-teaching).\nEr zijn consequenties voor het niet nakomen van de regels.\nUitzonderingen moeten duidelijk worden uitgelegd.\nHet kind zit in een vaste groep, met dagelijks (grotendeels) dezelfde kinderen.\nInzetten van extra communicatiemiddelen: Zie behoeften 9.\nInzetten van timetimers en zandlopers.",
    Veel: "Duidelijke regels (actief visueel aanbieden).\nOok bij niet nakomen van de regel.\nVerwachtingen worden vooraf aan de activiteit benoemd (pre-teaching).\nEr zijn consequenties voor het niet nakomen van de regels.\nHier wordt niet van afgeweken.\nHet kind zit in een vaste groep, met dagelijks (grotendeels) dezelfde kinderen.\nHet kind blijft in/bij deze groep.\nInzetten van extra communicatiemiddelen: zie behoeften 9.\nInzetten van timetimers en zandlopers.\nIk doe wat ik zeg en ik zeg wat ik doe."
  },
  "Structuur": {
    Weinig: "Er is een losse dagelijkse structuur.\nEr wordt in het moment bepaald.\nDe eetmomenten vinden ongeveer plaats rond dezelfde momenten op de dag.",
    Minder: "Er is een dagprogramma (verbaal aanbieden).\nEr kunnen veranderingen zijn in het dagprogramma.\nBenoemen wat de groep gaat doen is voldoende.",
    Neutraal: "Er is een dagprogramma (visueel aanbieden).\nEr kunnen aanpassingen in het dagprogramma worden gemaakt, mits deze van tevoren worden aangekondigd/uitgelegd.",
    Meer: "Er is een dagprogramma (visueel aanbieden).\nHet dagprogramma komt (in grote lijnen) dagelijks terug.\nDe plek waar de activiteit plaatsvindt, wordt in het dagprogramma aangegeven.\nWat de activiteit is hoeft niet van tevoren vast te staan.",
    Veel: "Er is een dagprogramma (visueel aanbieden).\nHet dagprogramma komt (in grote lijnen) dagelijks terug.\nDe plek waar de activiteit plaatsvindt, wordt in het dagprogramma aangegeven.\nMaar ook de activiteit.\nEr wordt niet afgeweken van het dagprogramma."
  },
"Nabijheid van kinderen": {
    Weinig: "Creëer een afgeschermde speelplek binnen de groepsruimte.\nBied activiteiten aan die individueel gedaan kunnen worden.\nGeef mogelijkheid om aan de rand van de groep mee te doen.",
    Minder: "Bied een vaste speelplek zonder afscherming.\nOrganiseer activiteiten voor kleine groepjes (2-3 kinderen).\nZorg voor rustige speelzones als uitwijkmogelijkheid.",
    Neutraal: "Geef ruimte om vrij te bewegen door de groep.\nLaat kind zelf kiezen waar en bij wie het speelt.\nZorg voor een natuurlijke verdeling van kinderen over de ruimte.",
    Meer: "Creëer speelplekken waar kinderen samen kunnen zijn.\nNodig kind uit bij groepsactiviteiten.\nStimuleer gezamenlijke spelmomenten.",
    Veel: "Organiseer veel groepsactiviteiten.\nCreëer plekken die gezamenlijk spel uitlokken.\nBegeleid actief bij het samenspel met andere kinderen."
  },
"Nabijheid van professional": {
    Weinig: "Er is een volwassene aanwezig in de groepsruimte.\nProfessional heeft zicht op het kind.\nProfessional is bereikbaar voor het kind.",
    Minder: "Er is een bekende volwassene in de groepsruimte.\nProfessional is zichtbaar voor het kind.\nKind kan de professional gemakkelijk vinden/bereiken.",
    Neutraal: "Er is een vertrouwde volwassene in de groepsruimte.\nProfessional is beschikbaar voor het kind.",
    Meer: "Professional bevindt zich in dezelfde hoek/zone van de groepsruimte als het kind.\nProfessional zorgt dat het kind altijd kan zien waar hij/zij is.\nExtra aanwezigheid tijdens overgangsmomenten.",
    Veel: "Professional blijft dicht bij het kind.\nProfessional is binnen armlengte beschikbaar.\nProfessional begeleidt het kind actief bij activiteiten.\nEr is een bekende volwassene in de groepsruimte.\nProfessional blijft in direct zicht van het kind."
  },
  "Aandacht": {
    Weinig: "Kind gedurende de dag 'zien'.\nEr is gedeelde aandacht op initiatief van het kind.\nEr wordt op het kind gelet en het wordt behoed voor gevaarlijke situaties.",
    Minder: "Kind gedurende de dag 'zien'.\nEr is gedeelde aandacht op initiatief van het kind.\n1x op een dag minimaal 10 minuten deel uitmaken van een activiteit waar het kind bij betrokken is.",
    Neutraal: "Kind gedurende de dag 'zien'.\nEr wordt geregeld ingecheckt bij het kind hoe het gaat.\n2x op een dag minimaal 10 minuten deel uitmaken van een activiteit waar het kind bij betrokken is.",
    Meer: "Kind gedurende de dag 'zien'.\nGeef eens per 5 minuten de bevestiging.\nEr wordt geregeld ingecheckt bij het kind hoe het gaat.\nMinimaal 1x per dag 5 minuten 1 op 1 activiteit.\n2x per dag deel uitmaken van een activiteit waar het kind bij betrokken is.",
    Veel: "Kind gedurende de dag 'zien'.\nGeef eens per 2 minuten de bevestiging.\nEr wordt geregeld ingecheckt bij het kind hoe het gaat.\nMinimaal 2x per dag 5 minuten 1 op 1 activiteit.\n2x per dag deel uitmaken van een activiteit waar het kind bij betrokken is."
  },
  "Positieve communicatie, bekrachtiging en waardering": {
    Weinig: "Sensitief reageren op het kind.\nHet kind voelt zich welkom op de groep.\nPlezier wordt gedeeld.\nEr wordt naar het kind geluisterd en er is (mits het kind het fijn vindt) oogcontact.\nEr worden groepscomplimenten gegeven.\nKind krijgt complimenten (verbaal/non-verbaal) voor goed gedrag of op het proces, soms met uitleg.\nZodra deze klaar is.\nHet kind krijgt tijdens een uitdagende activiteit aanmoediging (verbaal of non-verbaal).",
    Minder: "Sensitief reageren op het kind.\nHet kind voelt zich welkom op de groep.\nPlezier wordt gedeeld.\nEr wordt naar het kind geluisterd en er is (mits het kind het fijn vindt) oogcontact.\nEr worden groepscomplimenten gegeven.\nKind krijgt complimenten (verbaal/non-verbaal) voor goed gedrag of op het proces, soms met uitleg.\nHet kind krijgt tijdens een uitdagende activiteit aanmoediging (verbaal of non-verbaal).",
    Neutraal: "Sensitief reageren op het kind.\nHet kind voelt zich welkom op de groep.\nPlezier wordt gedeeld.\nEr wordt naar het kind geluisterd en er is (mits het kind het fijn vindt) oogcontact.\nEr worden groepscomplimenten gegeven.\nKind krijgt complimenten (verbaal/non-verbaal) voor goed gedrag of op het proces, benoem waarom dit goed is.\nHet kind krijgt tijdens de activiteit aanmoediging (verbaal of non-verbaal).",
    Meer: "Sensitief reageren op het kind.\nHet kind voelt zich welkom op de groep.\nPlezier wordt gedeeld.\nEr wordt naar het kind geluisterd en er is (mits het kind het fijn vindt) oogcontact.\nEr worden groepscomplimenten gegeven.\nKind krijgt verbale complimentjes voor goed gedrag of op het proces, benoem waarom dit goed is.\nHet kind krijgt tijdens de activiteit aanmoediging (verbaal of non-verbaal).\nComplimenten worden ook visueel uitgedrukt.",
    Veel: "Sensitief reageren op het kind.\nHet kind voelt zich welkom op de groep.\nPlezier wordt gedeeld.\nEr wordt naar het kind geluisterd en er is (mits het kind het fijn vindt) oogcontact.\nEr worden groepscomplimenten gegeven.\nKind krijgt verbale complimentjes voor goed gedrag of op het proces, benoem waarom dit goed is.\nHet kind krijgt tijdens de activiteit aanmoediging (verbaal of non-verbaal).\nComplimenten worden ook visueel uitgedrukt.\nEr wordt aan een specifiek doel gewerkt."
  },
"Uitdaging en stimuleren van de ontwikkeling": {
    Weinig: "Er is op verschillende ontwikkelingsgebieden een beeld van het ontwikkelingsniveau van het kind.\nEr wordt d.m.v. het competentiemodel een analyse gemaakt hoe de activiteit zich verhoudt tot het kind.\nEr is balans tussen de verschillende ontwikkelingsdomeinen.\nEr is een afwisseling van uitdagende en ontspannende activiteiten voor het kind.\nVaker ontspannende activiteiten.\nUitdagende activiteiten onder begeleiding.",
    Minder: "Er is op verschillende ontwikkelingsgebieden een beeld van het ontwikkelingsniveau van het kind.\nEr wordt d.m.v. het competentiemodel een analyse gemaakt hoe de activiteit zich verhoudt tot het kind.\nEr is balans tussen de verschillende ontwikkelingsdomeinen.\nEr is een afwisseling van uitdagende en ontspannende activiteiten voor het kind.\nUitdagende activiteiten onder begeleiding.",
    Neutraal: "Er is op verschillende ontwikkelingsgebieden een beeld van het ontwikkelingsniveau van het kind.\nEr wordt d.m.v. het competentiemodel een analyse gemaakt hoe de activiteit zich verhoudt tot het kind.\nEr is balans tussen de verschillende ontwikkelingsdomeinen.\nEr is een afwisseling van uitdagende en ontspannende activiteiten voor het kind.\nUitdagende activiteiten zowel alleen als onder begeleiding.\nVaker onder begeleiding.",
    Meer: "Er is op verschillende ontwikkelingsgebieden een beeld van het ontwikkelingsniveau van het kind.\nEr wordt d.m.v. het competentiemodel een analyse gemaakt hoe de activiteit zich verhoudt tot het kind.\nEr is balans tussen de verschillende ontwikkelingsdomeinen.\nEr is een afwisseling van uitdagende en ontspannende activiteiten voor het kind.\nVaker uitdagende activiteiten.\nUitdagende activiteiten zowel alleen als onder begeleiding.",
    Veel: "Er is op verschillende ontwikkelingsgebieden een beeld van het ontwikkelingsniveau van het kind.\nEr wordt d.m.v. het competentiemodel een analyse gemaakt hoe de activiteit zich verhoudt tot het kind.\nEr is balans tussen de verschillende ontwikkelingsdomeinen.\nEr is een afwisseling van uitdagende en ontspannende activiteiten voor het kind.\nVaker uitdagende activiteiten.\nUitdagende activiteiten zowel alleen als onder begeleiding.\nTijdens groepsactiviteiten wordt extra uitdaging aangeboden."
  },
  "Ruimte voor fysiek spel en beweging": {
    Weinig: "Gedurende de dag is er ruimte voor fysiek spel.\nMinimaal 2 uur.\nWanneer buitenspelen geen optie is, wordt er een alternatief aangeboden.\nOnderzoek favoriete bewegingsactiviteit, Biedt meerdere malen per dag aan.",
    Minder: "Gedurende de dag is er ruimte voor fysiek spel.\nMinimaal 2 uur.\nWanneer buitenspelen geen optie is, wordt er een alternatief aangeboden.\nOnderzoek favoriete bewegingsactiviteit, Biedt meerdere malen per dag aan.\nStimuleer bewegingsactiviteiten door het samen te doen.",
    Neutraal: "Gedurende de dag is er ruimte voor fysiek spel.\nMinimaal 2 uur.\nWanneer buitenspelen geen optie is, wordt er een alternatief aangeboden.\nKinderen worden actief gestimuleerd voor bewegingsactiviteiten.\nEr is ruimte om te stoeien (voorbeeld).\nDit wordt aangeboden als activiteit.",
    Meer: "Gedurende de dag is er ruimte voor fysiek spel.\nMinimaal 2 uur.\nWanneer buitenspelen geen optie is, wordt er een alternatief aangeboden.\nKinderen worden actief gestimuleerd voor bewegingsactiviteiten.\nEr is ruimte om te stoeien (voorbeeld).\nDit wordt aangeboden als activiteit.\nVolwassene neemt actief deel aan de activiteit.\nHet kind kan bewegen vooraf aan een zittende activiteit.",
    Veel: "Gedurende de dag is er ruimte voor fysiek spel.\nMinimaal 2 uur.\nWanneer buitenspelen geen optie is, wordt er een alternatief aangeboden.\nKinderen worden actief gestimuleerd voor bewegingsactiviteiten.\nEr is ruimte om te stoeien (voorbeeld).\nDit wordt aangeboden als activiteit.\nVolwassene neemt actief deel aan de activiteit.\nHet kind kan bewegen vooraf aan een zittende activiteit.\nEr worden aanpassingen gedaan binnen groepsactiviteiten voor het kind, om het te helpen met de bewegingsdrang."
  },
  "Autonomie en zelfstandigheid": {
    Weinig: "Eenvoudige taken worden door kinderen (passend bij het ontwikkelingsniveau) uitgevoerd.\nGeef het kind een gerichte opdracht tijdens vrij spel momenten.\nPlek van de activiteit wordt bepaald.",
    Minder: "Eenvoudige taken worden door kinderen (passend bij het ontwikkelingsniveau) uitgevoerd.\nOndersteun het kind door de keuzemogelijkheden bij vrije spel momenten terug te brengen naar twee.\nGeef twee keuzes waar het kind de activiteit kan uitvoeren.\nBij vrij spel.",
    Neutraal: "Eenvoudige taken worden door kinderen (passend bij het ontwikkelingsniveau) uitgevoerd.\nHet kind wordt hierin actief gestimuleerd.\nKeuzemogelijkheid bij vrij spel momenten (binnen de kaders van de groep).",
    Meer: "Eenvoudige taken worden door kinderen (passend bij het ontwikkelingsniveau) uitgevoerd.\nHet kind wordt hierin actief gestimuleerd.\nKeuzemogelijkheid bij vrij spel momenten (binnen de kaders van de groep).\nEr wordt gekeken waar het kind de groep bij kan ondersteunen (vb. afwassen).",
    Veel: "Eenvoudige taken worden door kinderen (passend bij het ontwikkelingsniveau) uitgevoerd.\nHet kind wordt hierin actief gestimuleerd.\nKeuzemogelijkheid bij vrij spel momenten (binnen de kaders van de groep).\nEr wordt gekeken waar het kind de groep bij kan ondersteunen (vb. afwassen).\nGroepsactiviteiten hebben keuzeopties."
  },
  "Ondersteuning in communicatie": {
    Weinig: "Spreek duidelijk op het niveau van het kind.\nPas je spreeksnelheid aan het kind.\nHelp kinderen begrijpen wat je zegt.\nGebruik gezichtsuitdrukkingen en intonatie om jouw emoties te tonen en woorden te versterken.\nStel vragen over persoonlijke informatie (naam/leeftijd), de dagelijkse routine, 'waar' en wie vragen.\nVragen kunnen ook buiten het hier en nu.\nGeef tijd om communicatie te verwerken (3-5 seconden).\nEen opdracht kan bestaan uit 2 stappen.",
    Minder: "Spreek duidelijk en op het niveau van het kind.\nPas je spreeksnelheid aan het kind.\nHelp kinderen begrijpen wat je zegt.\nGebruik gezichtsuitdrukkingen en intonatie om jouw emoties te tonen en woorden te versterken.\nGebruik gebaren zoals wijzen, knikken, zwaaien.\nStel vragen over persoonlijke informatie (naam/leeftijd), de dagelijkse routine, 'waar' en wie vragen.\nGeef tijd om communicatie te verwerken (3-5 seconden).\nEen opdracht kan bestaan uit 2 stappen.",
    Neutraal: "Spreek duidelijk en op het niveau van het kind.\nPas je spreeksnelheid aan het kind.\nHelp kinderen begrijpen wat je zegt.\nGebruik gezichtsuitdrukkingen en intonatie om jouw emoties te tonen en woorden te versterken.\nGebruik gebaren zoals wijzen, knikken, zwaaien.\nVragen naar basisbehoeften, identificatie van objecten/personen en twee keuzes.\nVragen in het hier en nu.\nGebruik bord met het dagprogramma bij het aankondigen van een overgang.\nGeef tijd om communicatie te verwerken (3-5 seconden).\nEen opdracht bestaat uit één stap.",
    Meer: "Spreek duidelijk en maak maximaal driewoordzinnen.\nSpreek op ooghoogte.\nSpreek je woorden langzaam uit.\nHelp kinderen begrijpen wat je zegt.\nGebruik gezichtsuitdrukkingen en intonatie om jouw emoties te tonen en woorden te versterken.\nGebruik simpele gebaren om basiswoorden te verduidelijken.\nStel vragen waarbij er twee keuzemogelijkheden zijn of ja-nee vragen.\nOndersteun visueel.\nVragen in het hier en nu.\nGebruik pictogrammen om overgangen, keuzemogelijkheden en verwachtingen te communiceren.\nGeef tijd om communicatie te verwerken (3-5 seconden).\nEen opdracht bestaat uit één stap.",
    Veel: "Spreek duidelijk en communiceer voornamelijk met één-woordzinnen.\nSpreek op ooghoogte.\nSpreek je woorden langzaam uit.\nHelp kinderen begrijpen wat je zegt.\nGebruik gezichtsuitdrukkingen en intonatie om jouw emoties te tonen en woorden te versterken.\nGebruik simpele gebaren om basiswoorden te verduidelijken.\nGebruik foto's en directe verwijzers om overgangen, keuzemogelijkheden en verwachtingen te communiceren.\nVragen in het hier en nu.\nGebruik foto's en directe verwijzers om overgangen, keuzemogelijkheden en verwachtingen te communiceren.\nGeef tijd om communicatie te verwerken (5-10 seconden).\nEen opdracht bestaat uit één stap.\nVoer de opdracht samen uit."
  }
};

const ScoreButton = ({ value, selected, onClick }) => (
  <button
    className={`px-2 py-1 m-1 text-sm md:text-base md:px-4 md:py-2 rounded-full transition-colors duration-200 ${
      selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
    onClick={onClick}
  >
    {value}
  </button>
);

const formatAdvice = (advice) => {
  return advice
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `• ${line}`)
    .join('\n');
};

const AdviceDisplay = ({ topic, score, advice }) => (
  <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-blue-600 mb-3">{topic} - {score}</h3>
    <div className="text-gray-700 space-y-2">
      {advice.split('\n').map((line, index) => (
        <p key={index} className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span className="font-sans text-base leading-relaxed">{line}</span>
        </p>
      ))}
    </div>
  </div>
);

const validateAllTopicsScored = (topicScores) => {
  return Object.values(topicScores).every(score => score !== null);
};

const KindKernKaart = () => {
  const [topicScores, setTopicScores] = useState(
    Object.fromEntries(topics.map(topic => [topic, null]))
  );
  const [showAdvice, setShowAdvice] = useState(false);

  const handleScoreClick = (topic, score) => {
    setTopicScores(prev => ({ ...prev, [topic]: score }));
  };

  const handleShowAdvice = () => {
    setShowAdvice(true);
  };

  const getAdvice = (topic, score) => {
    return adviezen[topic][score] || "Geen specifiek advies beschikbaar voor deze combinatie.";
  };

  const allTopicsScored = validateAllTopicsScored(topicScores);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">KindKernKaart</h1>
          
          {topics.map(topic => (
            <div key={topic} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-inner">
              <h2 className="text-lg font-semibold text-blue-700 mb-2">{topic}</h2>
              <div className="flex flex-wrap justify-center sm:justify-between">
                {scaleOptions.map(option => (
                  <ScoreButton
                    key={option}
                    value={option}
                    selected={topicScores[topic] === option}
                    onClick={() => handleScoreClick(topic, option)}
                  />
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center mt-8">
            <button 
              className="px-6 py-3 text-lg bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 shadow-md"
              onClick={handleShowAdvice}
              disabled={!allTopicsScored}
            >
              Toon adviezen
            </button>
          </div>

          {showAdvice && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">KindKernKaart Adviezen</h2>
              {topics.map(topic => (
                <AdviceDisplay
                  key={topic}
                  topic={topic}
                  score={topicScores[topic] || ''}
                  advice={getAdvice(topic, topicScores[topic])}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KindKernKaart;
