import { DataTunnelFlightTMAndMaterialModel } from "../models/dataTunnelFlightTMAndMaterial.model";
import { supabaseService } from "../services/supabase.service";

/**
   * Fetches the flightTMAndMaterials by shootingNumber, type of support class and workzone from the API.
   * @param {number} shootingNumber - The shootingNumber index of the range to fetch.
   * @param {string} typeOfSupportClassId - The ID of the type of support class to filter by.
   * @param {string} typeOfWorkZoneId - The ID of the work zones to filter by.
   * @returns {Promise<{data: DataTunnelFlightTMAndMaterialModel | null, error: any}>} - A promise resolving to an object containing the data or an error.
   */
const getFlightTMAndMaterialByShootingNumberAndSupportClassAndWorkZoneFromAPI = async (shootingNumber: number, typeOfSupportClassId: string, typeOfWorkZoneId: string): Promise<{data: DataTunnelFlightTMAndMaterialModel | null, error: any}> => {
  try {
    const { data, error } = await supabaseService
      .from('DataTunnelFlightTMAndMaterials')
      .select(`
        *
      `)
      .eq('shootingNumber', shootingNumber)
      .eq('typeOfSupportClassId', typeOfSupportClassId)
      .eq('typeOfWorkZoneId', typeOfWorkZoneId)
      .single();
  
    if (error) {
      console.error('Error fetching flightTMAndMaterials:', error);
      console.error(shootingNumber, typeOfSupportClassId, typeOfWorkZoneId)
      return { data: null, error };
    }
  
    return { data: data as DataTunnelFlightTMAndMaterialModel, error: null };
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return { data: null, error };
  }
}

/**
   * Updates the shooting date for a given flightTMAndMaterial by ID.
   * @param {string} id - The ID of the flightTMAndMaterial to update.
   * @param {string} shootingDate - The new shooting date to set.
   * @returns {Promise<{data: any, error: any}>} - A promise resolving to an object containing the data or an error.
   */
const updateFlightTMAndMaterialByUuidAndShootingDate = async (id: string, shootingDate: string): Promise<{data: any, error: any}> => {
  try {
    const { data, error } = await supabaseService
      .from('DataTunnelFlightTMAndMaterials')
      .update({ shootingDate })
      .eq('id', id)
      .select();
  
    if (error) {
      console.error('Error updating shooting date:', error);
      return { data: null, error };
    }
  
    return { data, error: null };
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return { data: null, error };
  }
}

export { getFlightTMAndMaterialByShootingNumberAndSupportClassAndWorkZoneFromAPI, updateFlightTMAndMaterialByUuidAndShootingDate };