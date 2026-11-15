const fs=require('fs'),path=require('path'),crypto=require('crypto');

// Give every visible panel a content-addressed URL so GitHub cannot reuse an older image.
module.exports=function publishAssets(root){
  const out=path.join(root,'assets/published');
  fs.mkdirSync(out,{recursive:true});
  const manifestPath=path.join(out,'navy-manifest.json');
  const previous=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath,'utf8')):{};
  const entries=[['hero','hero-v2',['png','gif']],['about','about-v2',['png']],['toolkit','toolkit-floating',['png','gif']],['dashboard','dashboard-v2',['png','gif']],['contact','connect-studio',['png','gif']],['partnership','banner-partnership',['jpg']]];
  const manifest={};
  for(const [label,source,extensions]of entries)for(const ext of extensions){
    const original=`assets/${source}.${ext}`;
    const bytes=fs.readFileSync(path.join(root,original));
    const hash=crypto.createHash('sha256').update(bytes).digest('hex').slice(0,12);
    const published=`assets/published/navy-${label}-${hash}.${ext}`;
    fs.writeFileSync(path.join(root,published),bytes);
    manifest[original]=published;
  }
  let readme=fs.readFileSync(path.join(root,'README.md'),'utf8');
  for(const [original,published]of Object.entries(manifest)){
    readme=readme.replaceAll(original,published);
    if(previous[original])readme=readme.replaceAll(previous[original],published);
  }
  readme=readme.replaceAll('assets/about-v2.svg',manifest['assets/about-v2.png']);
  fs.writeFileSync(path.join(root,'README.md'),readme);
  fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
  require('./static.cjs')(root);
  return manifest;
};
if(require.main===module)console.log(JSON.stringify(module.exports(path.resolve(__dirname,'../..')),null,2));
