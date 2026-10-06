const regionSelect=document.getElementById('region');
const yearSelect=document.getElementById('year');
const affordabilityEl=document.getElementById('affordability');
const priceEl=document.getElementById('price');
const earningsEl=document.getElementById('earnings');
const statusEl=document.getElementById('status');

const regions=Object.keys(housingData);
regions.forEach(r=>{const o=document.createElement('option');o.value=r;o.textContent=r;regionSelect.appendChild(o);});
const years=Object.keys(housingData[regions[0]]);
years.forEach(y=>{const o=document.createElement('option');o.value=y;o.textContent=y;yearSelect.appendChild(o);});

let trendChart, regionChart;

function statusFor(ratio){
  if(ratio>=10) return 'Very high';
  if(ratio>=8) return 'High';
  if(ratio>=6) return 'Moderate';
  return 'Lower';
}

function update(){
  const region=regionSelect.value;
  const year=yearSelect.value;
  const d=housingData[region][year];
  affordabilityEl.textContent=d.ratio.toFixed(1);
  priceEl.textContent='£'+d.price.toLocaleString();
  earningsEl.textContent='£'+d.earnings.toLocaleString();
  statusEl.textContent=statusFor(d.ratio);

  if(trendChart) trendChart.destroy();
  trendChart=new Chart(document.getElementById('trendChart'),{
    type:'line',
    data:{labels:years,datasets:[{label:region,data:years.map(y=>housingData[region][y].ratio),borderColor:'#2680c2',backgroundColor:'rgba(38,128,194,.15)',fill:true,tension:.3}]},
    options:{plugins:{legend:{display:false}},scales:{y:{title:{display:true,text:'Price-to-earnings ratio'}}}}
  });

  if(regionChart) regionChart.destroy();
  regionChart=new Chart(document.getElementById('regionChart'),{
    type:'bar',
    data:{labels:regions,datasets:[{label:'Affordability ratio in '+year,data:regions.map(r=>housingData[r][year].ratio),backgroundColor:regions.map(r=>housingData[r][year].ratio>=8?'#d64545':'#2680c2')}]},
    options:{plugins:{legend:{display:false}},scales:{y:{title:{display:true,text:'Price-to-earnings ratio'}}}}
  });
}

regionSelect.addEventListener('change',update);
yearSelect.addEventListener('change',update);
update();