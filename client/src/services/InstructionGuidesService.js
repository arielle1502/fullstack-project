import Api from '@/services/Api';

export default {
  getAllInstructionGuides(){
    return Api().get('instructionGuides')
  },
  postInstructionGuide(instructionGuide){
    return Api().post('instructionGuides', instructionGuide)
  },
  getInstructionGuideById(instructionGuideId){
    return Api().get(`instructionGuides/${instructionGuideId}`)
  },
  putInstructionGuide(instructionGuideId, instructionGuide){
    return Api().put(`instructionGuides/${instructionGuideId}`,instructionGuide)
  },
  
}