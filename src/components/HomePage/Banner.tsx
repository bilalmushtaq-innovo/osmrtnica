import SelectLabels from "../ui/SelectLabel";

const Banner = () => {
    return (
        <div className="p-16 banner w-full text-white">
            <div className="w-[85%] mx-auto flex justify-end pb-8">
                <div className="w-[50%] self-end flex justify-center flex-col gap-4 pb-4">
                    <h1 className="text-[40px] text-white font-normal text-center">Lokalne cvetličarne</h1>
                    <div className="">
                        <SelectLabels
                            width="100%"
                            label="Išči po kraju"
                            menuItems={[
                                { value: 10, label: 'Ten' },
                                { value: 20, label: 'Twenty' },
                                { value: 30, label: 'Thirty' },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
