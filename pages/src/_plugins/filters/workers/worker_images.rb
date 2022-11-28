require_relative "../../utils/worker_utils.rb"

module Jekyll
    module WorkerImagesFilter
        def get_worker_images(input, worker, className = "")
            site = Jekyll.sites.first
            path = "/assets/images/workers/#{worker}"
            source_path = site.source + path

            # Get the worker info
            worker_info = WorkerUtils.getWorkerInfo(site, worker)

            # Get all of the source files
            source_images = Dir.glob(source_path + '/**/*').select do |path|
                isFile = File.file?(path)
                pieces = File.basename(path, '.*').split('-')
                # Filter by male only because we do not want to get duplicate entries for both male and female
                next unless isFile && worker == pieces[0] && pieces[1] == "male"
                true
            end

            # Transform the images into the proper HTML string
            return source_images.collect do |worker_image|
                pieces = File.basename(worker_image, '.*').split('-')
                ext = File.extname(worker_image)

                "<div class='#{className}' data-style='#{pieces[2]}'><div>" +
                    "<img src='../../assets/images/workers/#{worker}/#{pieces[2]}/male/#{pieces[3]}#{ext}' alt='#{worker_info["name"]} male #{pieces[3]}'/></div><div>" +
                    "<img src='../../assets/images/workers/#{worker}/#{pieces[2]}/female/#{pieces[3]}#{ext}' alt='#{worker_info["name"]} female #{pieces[3]}'/></div></div>"
            end
        end
    end
end