function CourseContent() {
    return(
        <div className="w-full flex flex-col">
            <p className="font-semibold text-xl text-[#143B75] mb-3">Kursus Yang Tersedia</p>
            {/* data map */}
            <div className="flex flex-col gap-4 border-[1.5px] rounded-lg py-4 px-4 shadow-lg mb-6">
                <div className="w-full h-[150px] flex gap-4">
                    <div className="flex-[1]">
                        <img src="https://thumb.viva.id/intipseleb/1265x711/2022/03/10/622960f1d50ed-widi-vierra.jpg" alt="Gambar Kursus" className="w-full h-full object-cover rounded-sm"/>
                    </div>
                    <div className="flex-[2] flex flex-col gap-4 justify-between">
                        <div className="flex-[3]">
                            <p className="font-medium text-lg text-[#143B75]">Lorem Ipsum</p>
                            <p className="text-sm text-justify overflow-hidden line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos assumenda sapiente odit cum, dignissimos delectus illum quae magni sit. Similique, qui. Natus iusto totam dolor nihil sint maxime exercitationem.</p>
                        </div>
                        <div className="flex-[1] flex w-full items-end justify-end">
                            <a href="" className="text-xs text-blue-400 hover:text-teal-800">Show More</a>
                        </div>
                    </div>
                </div>
            </div>

            


            <div className="flex flex-col gap-4 border-[1.5px] rounded-lg py-4 px-4 shadow-lg mb-6">
                <div className="w-full h-[150px] flex gap-4">
                    <div className="flex-[1]">
                        <img src="https://thumb.viva.id/intipseleb/1265x711/2022/03/10/622960f1d50ed-widi-vierra.jpg" alt="Gambar Kursus" className="w-full h-full object-cover rounded-sm"/>
                    </div>
                    <div className="flex-[2] flex flex-col gap-4 justify-between">
                        <div className="flex-[3]">
                            <p className="font-medium text-lg text-[#143B75]">Lorem Ipsum</p>
                            <p className="text-sm text-justify overflow-hidden line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos assumenda sapiente odit cum, dignissimos delectus illum quae magni sit. Similique, qui. Natus iusto totam dolor nihil sint maxime exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam consequatur quis qui reprehenderit temporibus minus maxime culpa facere tempora, id adipisci esse beatae totam quos eum animi odio doloremque?</p>
                        </div>
                        <div className="flex-[1] flex w-full items-end justify-end">
                            <a href="" className="text-xs text-blue-400 hover:text-teal-800">Show More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 border-[1.5px] rounded-lg py-4 px-4 shadow-lg mb-6">
                <div className="w-full h-[150px] flex gap-4">
                    <div className="flex-[1]">
                        <img src="https://thumb.viva.id/intipseleb/1265x711/2022/03/10/622960f1d50ed-widi-vierra.jpg" alt="Gambar Kursus" className="w-full h-full object-cover rounded-sm"/>
                    </div>
                    <div className="flex-[2] flex flex-col gap-4 justify-between">
                        <div className="flex-[3]">
                            <p className="font-medium text-lg text-[#143B75]">Lorem Ipsum</p>
                            <p className="text-sm text-justify overflow-hidden line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos assumenda sapiente odit cum, dignissimos delectus illum quae magni sit. Similique, qui. Natus iusto totam dolor nihil sint maxime exercitationem.</p>
                        </div>
                        <div className="flex-[1] flex w-full items-end justify-end">
                            <a href="" className="text-xs text-blue-400 hover:text-teal-800">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default CourseContent;