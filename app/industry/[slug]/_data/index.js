import { industryWarehouseData } from './warehouse';
import { industryAviationData } from './aviation';
import { industryLsvData } from './lsv';
import { industryAviationGseData } from './aviation-gse';
import { industryData as defaultIndustryData } from './default';

export const industryData = {
  ...defaultIndustryData,
  'warehouse-manufacturing': industryWarehouseData,
  'aviation-ground-support-equipment': industryAviationData,
  'aviation-gse': industryAviationGseData,
  'low-speed-vehicles': industryLsvData,
};

export async function getIndustryData(slug) {
  return industryData[slug] || null;
}
