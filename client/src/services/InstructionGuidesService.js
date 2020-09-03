import Api from '@/services/Api';

export default {
  getAllInstructionGuides(){
    return Api().get('instructionGuides')
  },
  postInstructionGuide(instructionGuide){
    return Api().post('instructionGuides', instructionGuide)
  },
}