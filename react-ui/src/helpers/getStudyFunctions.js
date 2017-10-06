import mapScreenTypeToModule from './mapScreenTypeToModule';

export default function getStudyFunctions(screenType) {
  const module = mapScreenTypeToModule(screenType);
  return {
    isDataLoaded: module.isDataLoaded,
    fetchData: module.fetchData,
    checkData: module.checkData,
    initStudyData: module.initStudyData,
    initUi: module.initUi,
    run: module.run,
    clean: module.clean
  };
}
